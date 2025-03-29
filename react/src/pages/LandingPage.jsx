import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";

function LandingPage() {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand fw-lighter text-light fs-2" href="#">CVP<span className="fs-2 fw-bold text-light">360</span></a>
                    <div className="nav-links">
                        <Link to="/home" className="text-light text-decoration-none me-3 px-5">Home</Link>
                        <Link to="/doacao" className="text-light text-decoration-none pr-5">Doação</Link>
                    </div>
                    <Link to="/register" className="text-light text-decoration-none">Entrar</Link>
                </div>
            </nav>
            <div className="main-content">
                <ImageCarousel />
            </div>
        </>
    );
}

export default LandingPage; 