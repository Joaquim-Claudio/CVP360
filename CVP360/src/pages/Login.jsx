import React from "react";
import LoginButton from "../components/LoginButton";
import LoginInput from "../components/Input";

function Login (){
    return(
        <div className="LoginPage">
            <div className="LoginBody px-5">
                <div className="pt-5 fw-semibold fs-2">
                    Login
                </div>
                <div className="pt-1 pb-4 fw-light fs-6 ">
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
                <LoginButton/>
                <div className=" fw-lighter fs-6 text-center pt-1 pb-4">
                Esqueci-me da password!
                </div>

                <hr/>
                <div className="fw-light fs-6 text-center">
                Ainda não tem conta CVP360? <span className="fw-bold">Crie uma.</span>
                </div>
            </div>
        </div>
    );
}
export default Login;