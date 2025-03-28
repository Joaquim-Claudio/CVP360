import React from "react";
import LoginButton from "../components/LoginButton";
import LoginInput from "../components/Input";

function Register (){
    return(
        <div className="LoginPage">
            <div className="RegisterBody px-5">
                <div className="pt-5 fw-semibold fs-2">
                    Registo
                </div>
                <div className="pt-1 pb-4 fw-light fs-6">
                Partilhe as suas informações connosco.
                </div>
                <div className="pb-3 text-white">
                <LoginInput
                placeholder="Nome Completo"/>
                </div>
                <div className="pb-3 text-white">
                <LoginInput
                placeholder="Data de Nascimento"/>
                </div>
                <div className="pb-3 text-white">
                <LoginInput
                placeholder="E-mail"/>
                </div>
                <div className="pb-3 text-white ">
                    <LoginInput
                    placeholder="Telefone"/>                    
                </div>
                <div className="pb-3 text-white ">
                    <LoginInput
                    placeholder="Nº Contribuinte"/>                    
                </div>           
                <LoginButton text="Registar"
                
                />
                
                <div className=" fw-lighter fs-6 text-center pt-1 pb-4">
                Esqueci-me da password!
                </div>

                <hr/>
                <div className=" fw-lighter fs-6 text-center">
                Já tem uma conta CVP360?  <span className="fw-bold">Inicie sessão.</span>
                </div>
            </div>
        </div>
    );
}
export default Register;