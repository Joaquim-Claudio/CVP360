import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import Logo from "../assets/images/LogoCVP.svg";
import Footer from "../components/Footer";
import CardLand from "../components/CardLand";
import Calendar from "../assets/images/calendar.png";
import Heart from "../assets/images/heart.png";
import Buildings from "../assets/images/buildings.png";

function LandingPage() {
    return (
        <>

                    <nav className="navbar ps-2" style={{ height: "78px" }}>
                        <div className="container-fluid">
                        <a className="navbar-brand fw-lighter " href="#"><img src={Logo} alt="" style={{ width: "100px", height: "auto" }}/></a>
                            
                            <div className="user-info">
                                <div className="user-details pe-2">
                                <Link to="/register" className="text-light text-decoration-none border rounded-3 px-2 py-1 border-2">Doar</Link>
                               
                            </div>
                            </div>
                        </div>
                    </nav>
            
            <div className="main-content">
                <ImageCarousel />
            </div>
            <div className=" bg-white ps-4 py-5 bg-cruz">
                <div className="fw-semibold pb-3 textLa">
                    Uma aplicação criada com o propósito de unir <br/>e ajudar a mensagem que a 
                    Cruz Vermelha <br/>transmite à 160 em Portugal.
                </div>
                <div className=" textLa1">
                    Esta aplicação põe a tecnologia ao serviço do bem coletivo.<br/>
                    Mantendo e cumprido os valores da Cruz Vermelha <br/>Portuguesa, 
                    a aplicação está aberta a todos.
                </div>

            </div>

            <div className="ps-4 py-3 pt-5 bg-body-secondary">
                <div className="fw-bold">
                    Funcionalidades
                </div>
                <div className="fw-normal">
                    Algumas das funcionalidades que a app CVP360 tem. 
                </div>
                <div className="container"> 
                <div className="row justify-content-center ">
                    <div className="col-4 ">
                        <CardLand image={Calendar}
                        title="Eventos"
                        text="Ver e participar de eventos promovidos pela Cruz Vermelha  Portuguesa e seus parceiros."                        
                        />
                    </div>
                    <div className="col-4">
                        <CardLand  image={Buildings} 
                        title="Projetos"
                        text="Ver os projetos da Cruz Vermelha Portuguesa e apoiá-los com doações."                        
                        />
                    </div>
                    <div className="col-4">
                        <CardLand image={Heart}  
                        title="Gerir Doações"
                        text="Ver e gerir doações feitas pelo utilizador em projetos e eventos."
                        />
                    </div>
                </div>
            </div>

            </div>
            {<Footer/> }
        </>
    );
}

export default LandingPage; 