import React from "react";
import LoginButton from "../components/LoginButton";
import LoginInput from "../components/Input";
import { Link } from "react-router-dom";
import axios from "axios";


const accounts = axios.create({
    baseURL: import.meta.env.VITE_ACCOUNT_LOGIN_URL,
    withCredentials: true
  })

function Login (){



    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [inputClass, setInputClass] = React.useState("form-control");
    const [patternClass, setPaternClass] = React.useState("red-msg");
    const [failClass, setfailClass] = React.useState("red-msg");

    const regex = /^(?!.*\b(SELECT|INSERT|DELETE|UPDATE|DROP|TRUNCATE|ALTER|CREATE|REPLACE|EXEC|UNION|TABLE|DATABASE)\b).*\S.*$/i;

    function showPatternError() {
        setInputClass(current => current + " red-border");
        setPaternClass(current => current + " show");
    }

    function showFail() {
        setInputClass(current => current + " red-border");
        setfailClass(current => current + " show");
    }

    function hideErrors() {
        setInputClass(current => current.replaceAll(" red-border", ""));
        setPaternClass(current => current.replaceAll(" show", ""));
        setfailClass(current => current.replaceAll(" show", ""));
    }


    function handleUsernameChange(event) {
        setUsername(event.target.value);
        hideErrors();
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
        hideErrors();
    }

    function handleSubmit(event) {
        event.preventDefault();

        if(!regex.test(username) || !regex.test(password)) {
            showPatternError();
            return;
        }

        try {
            setIsLoading(true);

            accounts.post( "/" ,{
                username,
                password
            }) .then( (response) => {
                setIsLoading(false);

                setSuccess(true);

                setTimeout(function() {
                    setSuccess(false);
                    window.location.replace("/home");
                }, 2000)


            }).catch( (error) => {
                    if(!error.response){
                        console.error("No error response");

                        setError(true)

                        setTimeout(function() {
                            setError(false);
                        }, 3000)
                    }
                    else if (error.response?.status == 401) {
                        console.error("Response: " + error.response.status + " \"Unauthorized\"");
                        showFail();
                    }
                    else console.error("Login failed");
           
                    setIsLoading(false)
                });

        } catch(err) {
            console.error(err)
        }
        
    }

    return(
        <div className="LoginPage">
            <div className="LoginBody px-5">
                <div className="pt-5 fw-semibold fs-2">
                    Login
                </div>
                <div className="pt-1 pb-4 fw-light texto-part  ">
                Inicie sessão com a sua conta CVP360
                </div>
                <form onSubmit={handleSubmit}>

                    <div className="pb-3">
                    <LoginInput
                        type="text"
                        autoComplete="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="E-mail ou Telemóvel"/>
                    </div>
                    <div className="pb-3 text-white ">
                        <LoginInput
                        type="password"
                        autoComplete="current-password" 
                        value={password}
                        onChange={handlePasswordChange}               
                        placeholder="Password"/>
                        
                    </div>           
                    <LoginButton 
                        type="submit"
                        text="Entrar"         
                    />

                </form>
                <div className=" fw-lighter text-center texto-part pt-3 pb-4">
                Esqueci-me da password!
                </div>

                <hr/>
                <Link 
                    to="/register" 
                    className="fw-lighter text-center texto-part" 
                    style={{ textDecoration: "none", color: "inherit" }}>
                    Ainda não tem conta CVP360? <span className="fw-bold">Crie uma.</span>
                </Link>
            </div>
        </div>
    );
}
export default Login;