import React from "react";
import { Link } from "react-router-dom";
import imageEvent from "../assets/images/imageEvent.png";
import Frame1 from "../assets/images/Frame1.png";
import Logo from "../assets/images/LogoCVP.svg";
import Footer from "../components/Footer";

function Doacao({user}) {
    return (
        <>
            <nav className="navbar ps-2" style={{ height: "78px" }}>
                <div className="container-fluid">
                <a className="navbar-brand fw-lighter " href="#"><img src={Logo} alt="" style={{ width: "100px", height: "auto" }}/></a>
                    <div className="nav-links">
                        <Link to="/home" className="text-light fw-semibold text-decoration-none me-3 px-5">Home</Link>
                        <Link to="/doacao" className="text-light fw-semibold text-decoration-none pr-5">Doação</Link>
                    </div>
                    <div className="user-info">
                        <div className="user-details pe-2">
                        <div className="user-name">{user.fullName}</div>
                        <div className="user-role">{user.profile.extendedName}</div>
                        </div>
                        <Link to="/profile" className="user-image">
                            <img src={Frame1} alt="User Profile" />
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="main-content">
                <img src={Frame1} alt="Frame1" className="img-fluid w-100" style={{ height: '50vh', objectFit: 'cover' }} />
            </div>
            <div className="container mt-5">
                <h1 className="mb-3">As suas Doações</h1>
                <div className="donation-cards-container">
                    <div className="donation-cards-row">
                        <div className="donation-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Donation 1" className="card-image" />
                                <div className="price-box">
                                    <span className="amount">12,20</span>
                                    <span className="currency">€</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 1</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 1</h4>
                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h3>
                            </div>
                        </div>
                        <div className="donation-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Donation 2" className="card-image" />
                                <div className="price-box">
                                    <span className="amount">15,50</span>
                                    <span className="currency">€</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 2</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 2</h4>
                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h3>
                            </div>
                        </div>
                        <div className="donation-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Donation 3" className="card-image" />
                                <div className="price-box">
                                    <span className="amount">20,00</span>
                                    <span className="currency">€</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 3</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 3</h4>
                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Doacao;
