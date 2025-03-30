import React from "react";
import LoginButton from "../components/LoginButton";
import LoginInput from "../components/Input";
import { Link } from "react-router-dom";
import axios from "axios";


const accounts = axios.create({
    baseURL: import.meta.env.VITE_ACCOUNT_REGISTER_URL,
    withCredentials: true
  })

function Register (){
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [fullName, setFullName] = React.useState("");
    const [birthDate, setBirthDate] = React.useState();
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [nif, setNif] = React.useState("");
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


    function handlefullNameChange(event) {
        setFullName(event.target.value);
        hideErrors();
    }

    function handleBirthDateChange(event) {
        setBirthDate(event.target.value);
        hideErrors();
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
        hideErrors();
    }

    function handlePhoneChange(event) {
        setPhoneNumber(event.target.value);
        hideErrors();
    }

    function handleNifChange(event) {
        setNif(event.target.value);
        hideErrors();
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
        hideErrors();
    }

    function handleSubmit(event) {
        event.preventDefault();

        try {
            setIsLoading(true);

            accounts.post( "/" ,{
                fullName,
                birthDate,
                email,
                password,
                phoneNumber,
                nif
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
            <div className="RegisterBody px-5">
                <div className="pt-25 fw-semibold fs-2 ">
                    Registo
                </div>
                <div className="py-1 pb-4 fw-light texto-part">
                Partilhe as suas informações connosco.
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="pb-3 text-white">
                        <LoginInput
                            type="text"
                            placeholder="Nome Completo"
                            autoComplete="name"
                            value={fullName}
                            onChange={handlefullNameChange}
                            />
                    </div>
                    <div className="pb-3 text-white">
                        <LoginInput
                            type="date"
                            placeholder="Data de Nascimento"
                            autoComplete="bday"
                            value={birthDate}
                            onChange={handleBirthDateChange}
                            />
                    </div>
                    <div className="pb-3 text-white">
                        <LoginInput
                            type="email"
                            placeholder="E-mail"
                            autoComplete="email"
                            value={email}
                            onChange={handleEmailChange}
                            />
                    </div>
                    <div className="pb-3 text-white ">  
                        <LoginInput
                            type="tel"
                            placeholder="Telefone"
                            autoComplete="tel"
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            />            
                    </div>
                    <div className="pb-3 text-white ">    
                        <LoginInput
                            type="text"
                            placeholder="Nº Contribuinte"
                            autoComplete="off"
                            value={nif}
                            onChange={handleNifChange}
                            />                
                    </div>    
                    <div className="pb-3 text-white ">    
                        <LoginInput
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={password}
                            onChange={handlePasswordChange}
                            />                
                    </div>        
                        <LoginButton text="Registar" type="submit"/>
                </form>
                
                <div className=" fw-lighter text-center texto-part pt-3">
                Esqueci-me da password!
                </div>

                <hr/>
                <Link 
                    to="/login" 
                    className="fw-lighter text-center texto-part" 
                    style={{ textDecoration: "none", color: "inherit" }}>
                    Já tem uma conta CVP360? <span className="fw-bold">Inicie sessão.</span>
                </Link>

            </div>
        </div>
    );
}
export default Register;