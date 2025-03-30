import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import Logo from "../assets/images/LogoCVP.svg";
import Footer from "../components/Footer";
import CardLand from "../components/CardLand";
import Calendar from "../assets/images/calendar.png";
import Heart from "../assets/images/heart.png";
import Buildings from "../assets/images/buildings.png";
import Pessoas from "../assets/images/pessoas.png";
import CruzIcon from "../assets/images/cruzVermelha.png";
import CardBlack from "../components/CardBlack";
import "../styles/landing.scss";

function LandingPage() {
    return (
        <>
            <nav className="navbar ps-2" style={{ height: "78px" }}>
                <div className="container-fluid">
                    <a className="navbar-brand fw-lighter" href="#">
                        <img src={Logo} alt="" style={{ width: "100px", height: "auto" }}/>
                    </a>
                    <div className="user-info">
                        <div className="user-details pe-2">
                            <Link to="/login" className="text-light text-decoration-none border rounded-3 px-2 py-1 border-2">Doar</Link>
                        </div>
                    </div>
                </div>
            </nav>
            
            <div className="main-content position-relative">
                <img src={Pessoas} alt="Frame1" className="img-fluid w-100" style={{ height: '55vh', objectFit: 'cover' }} />
                <div className="position-absolute bottom-0 start-0 ps-4 pb-4 text-white" style={{ zIndex: 1 }}>
                    <div className="d-flex flex-column">
                        <span className="display-4 fw-bold">UNIDOS</span>
                        <span className="display-4 fw-bold">CRIAMOS</span>
                        <span className="display-4 fw-bold"> E AJUDAMOS</span>
                    </div>
                    <div className="mt-1" style={{ width: '50%'}}></div>
                    <span className="fs-5">Junte-se à CVP360 e comece a fazer a diferença</span>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center bg-white pe-4 ps-4 py-5 bg-cruz">
                <div>
                    <div className="fw-semibold pb-3 textLa">
                        Uma aplicação criada com o propósito de unir <br/>e ajudar a mensagem que a 
                        Cruz Vermelha <br/>transmite à 160 em Portugal.
                    </div>
                    <div className="textLa1">
                        Esta aplicação põe a tecnologia ao serviço do bem coletivo.<br/>
                        Mantendo e cumprido os valores da Cruz Vermelha <br/>Portuguesa, 
                        a aplicação está aberta a todos.
                    </div>
                </div>
                
                <div className="pe-5">
                    <img className="pe-5 img-fluid" src={CruzIcon} alt="Cruz Vermelha" style={{ width: "300px", height: "auto" }} />
                </div>
            </div>

            <div className="pb-5 pt-5 bg-body-secondary">
                <div className="container-fluid">
                    <div className="ps-4 mb-3">
                        <div className="fw-bold fs-4">
                            Funcionalidades
                        </div>
                        <div className="fw-normal text-muted">
                            Algumas das funcionalidades que a app CVP360 tem. 
                        </div>
                    </div>
                    <div className="px-4"> 
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="card h-100 border-0 shadow-sm rounded-4" style={{ background: "linear-gradient(45deg, #FF0000, #DB0071)" }}>
                                    <div className="card-body d-flex align-items-center p-4">
                                        <div className="me-4">
                                            <img src={Calendar} alt="Calendar" style={{ width: "90px", height: "90px", objectFit: "contain" }} />
                                        </div>
                                        <div>
                                            <h5 className="card-title mb-2 text-white">Eventos</h5>
                                            <p className="card-text text-white-50 mb-0">Ver e participar de eventos promovidos pela Cruz Vermelha Portuguesa e seus parceiros.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100 border-0 shadow-sm rounded-4" style={{ background: "linear-gradient(45deg, #FF0000, #DB0071)" }}>
                                    <div className="card-body d-flex align-items-center p-4">
                                        <div className="me-4">
                                            <img src={Buildings} alt="Buildings" style={{ width: "90px", height: "90px", objectFit: "contain" }} />
                                        </div>
                                        <div>
                                            <h5 className="card-title mb-2 text-white">Projetos</h5>
                                            <p className="card-text text-white-50 mb-0">Ver os projetos da Cruz Vermelha Portuguesa e apoiá-los com doações.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100 border-0 shadow-sm rounded-4" style={{ background: "linear-gradient(45deg, #FF0000, #DB0071)" }}>
                                    <div className="card-body d-flex align-items-center p-4">
                                        <div className="me-4">
                                            <img src={Heart} alt="Heart" style={{ width: "90px", height: "90px", objectFit: "contain" }} />
                                        </div>
                                        <div>
                                            <h5 className="card-title mb-2 text-white">Gerir Doações</h5>
                                            <p className="card-text text-white-50 mb-0">Ver e gerir doações feitas pelo utilizador em projetos e eventos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="row pt-5 justify-content-around gx-0">
                    <div className="pt-5 fw-semibold ps-4">
                        Algumas das nossas ações 
                    </div>
                    <div className="fw-normal ps-4 pb-4">
                        Alguns dos projetos que estamos envolvidos. 
                    </div>
                    <div className="container-fluid ps-4">
                        <div className="row">
                            <div className="col-4 mb-4">
                                <CardBlack 
                                    title="Apoio a Idosos"
                                />
                            </div>
                            <div className="col-4 mb-4">
                                <CardBlack 
                                    title="Apoio a Vítimas de Violência"
                                />
                            </div>
                            <div className="col-4 mb-4">
                                <CardBlack 
                                    title="Apoio a Vítimas de Emergências"
                                />
                            </div>
                            <div className="col-4 mb-4">
                                <CardBlack 
                                    title="Apoio a Refugiados"
                                />
                            </div>
                            <div className="col-4 mb-4">
                                <CardBlack 
                                    title="Apoio Familiar e Habitacional"
                                />
                            </div>
                            <div className="col-4 mb-4">
                                <CardBlack 
                                    title="Apoio Humanitário Global"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pre-footer py-3" style={{ background: "linear-gradient(45deg, #FF0000, #DB0071)" }}>
                <div className="container">
                    <div className="text-center mb-2">
                        <h2 className="text-white mb-1">Siga o trabalho da Cruz Vermelha Portuguesa nas Redes Sociais</h2>
                        <p className="text-white-50 fs-5">Acompanhe as principais crises humanitárias também nas nossas páginas.</p>
                    </div>
                    <div className="d-flex justify-content-center gap-3">
                        <div className="social-icon rounded-4 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", background: "white" }}>
                            <i className="fab fa-facebook-f text-danger"></i>
                        </div>
                        <div className="social-icon rounded-4 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", background: "white" }}>
                            <i className="fab fa-twitter text-danger"></i>
                        </div>
                        <div className="social-icon rounded-4 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", background: "white" }}>
                            <i className="fab fa-instagram text-danger"></i>
                        </div>
                        <div className="social-icon rounded-4 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", background: "white" }}>
                            <i className="fab fa-linkedin-in text-danger"></i>
                        </div>
                        <div className="social-icon rounded-4 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", background: "white" }}>
                            <i className="fab fa-tiktok text-danger"></i>
                        </div>
                        <div className="social-icon rounded-4 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", background: "white" }}>
                            <i className="fab fa-youtube text-danger"></i>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default LandingPage; 