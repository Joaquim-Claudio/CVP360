import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/LogoCVP.svg";
import Footer from "../components/Footer";
import { FaSignOutAlt } from "react-icons/fa";
import imageEvent from "../assets/images/imageEvent.png";

function ControlPanel() {
    return (
        <>
            <nav className="navbar ps-2" style={{ height: "78px" }}>
                <div className="container-fluid">
                    <a className="navbar-brand fw-lighter" href="#">
                        <img src={Logo} alt="" style={{ width: "100px", height: "auto" }}/>
                    </a>
                    <div className="nav-links">
                        <Link to="/home" className="text-light text-decoration-none me-3">Home</Link>
                        <Link to="/controlPanel" className="text-light text-decoration-none">Painel de Controlo</Link>
                    </div>
                    <div className="user-info d-flex align-items-center">
                        <div className="user-details pe-3">
                            <div className="text-light">lorem ipsum</div>
                            <div className="text-light-50 small">Administrador</div>
                        </div>
                        <div className="user-image me-3">
                            <Link to="/profile">
                                <img src={imageEvent} alt="User" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                            </Link>
                        </div>
                        <div className="logout-icon">
                            <FaSignOutAlt className="text-light" style={{ fontSize: "1.2rem", cursor: "pointer" }} />
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container mt-5">
                <div className="header-section">
                    <h1>Painel de Controlo</h1>
                    <button className="new-event-btn" style={{ width: "40px", height: "40px", borderRadius: "50%" }}>
                        Novo Evento
                    </button>
                </div>
                <div className="donation-cards-container">
                    <div className="donation-cards-row">
                        <div className="donation-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Donation 1" className="card-image" />
                                <div className="date-box">
                                    <span className="day">15</span>
                                    <span className="month">MAR</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue</h1>
                                <h4>Evento</h4>
                                <h3>Doação para o evento de doação de sangue organizado pela Cruz Vermelha.</h3>
                            </div>
                            <div className="card-actions">
                                <button className="card-btn">Atualizar</button>
                            </div>
                        </div>
                        <div className="donation-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Donation 2" className="card-image" />
                                <div className="date-box">
                                    <span className="day">10</span>
                                    <span className="month">MAR</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Apoio a Refugiados</h1>
                                <h4>Projeto</h4>
                                <h3>Contribuição para o projeto de apoio a refugiados.</h3>
                            </div>
                            <div className="card-actions">
                                <button className="card-btn">Atualizar</button>
                            </div>
                        </div>
                        <div className="donation-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Donation 3" className="card-image" />
                                <div className="date-box">
                                    <span className="day">05</span>
                                    <span className="month">MAR</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Emergência Humanitária</h1>
                                <h4>Campanha</h4>
                                <h3>Doação para a campanha de emergência humanitária global.</h3>
                            </div>
                            <div className="card-actions">
                                <button className="card-btn">Atualizar</button>
                            </div>
                        </div>
                    </div>
                    <button className="load-more-btn">
                        Carregar Mais Eventos
                    </button>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default ControlPanel; 