import React from "react";
import LoginButton from "../components/LoginButton";
import LoginInput from "../components/Input";
import { Link } from "react-router-dom";

function Register (){
    return(
        <div className="LoginPage">
            <div className="RegisterBody px-5">
                <div className="pt-5 fw-semibold fs-2 ">
                    Registo
                </div>
                <div className="pt-1 pb-4 fw-light texto-part">
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
                
                <div className=" fw-lighter text-center texto-part pt-3 pb-4">
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