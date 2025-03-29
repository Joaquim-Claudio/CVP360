import React from "react";
import LoginButton from "../components/LoginButton";
import LoginInput from "../components/Input";
import { Link } from "react-router-dom";

function Login (){
    return(
        <div className="LoginPage">
            <div className="LoginBody px-5">
                <div className="pt-5 fw-semibold fs-2">
                    Login
                </div>
                <div className="pt-1 pb-4 fw-light texto-part  ">
                Inicie sessão com a sua conta CVP360
                </div>
                <div className="pb-3 text-white">
                <LoginInput
                placeholder="E-mail ou Telemóvel"/>
                </div>
                <div className="pb-3 text-white ">
                    <LoginInput
                    placeholder="Password"/>
                    
                </div>           
                <LoginButton
                    text="Entrar"         
                />
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