import React from "react";
import { Link } from "react-router-dom";
import imageEvent from "../assets/images/imageEvent.png";
import AddCardPopup from "../components/AddCardPopup";

function UserProfile() {
    const handleAddCard = () => {
        AddCardPopup();
    };

    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand fw-lighter text-light fs-2" href="#">CVP<span className="fs-2 fw-bold text-light">360</span></a>
                    <div className="nav-links">
                        <Link to="/home" className="text-light text-decoration-none me-3 px-5">Home</Link>
                        <Link to="/doacao" className="text-light text-decoration-none pr-5">Doação</Link>
                    </div>
                    <div className="user-info">
                        <div className="user-details">
                            <div className="user-name">John Doe</div>
                            <div className="user-role">Volunteer</div>
                        </div>
                        <Link to="/profile" className="user-image">
                            <img src={imageEvent} alt="User Profile" />
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="container mt-5">
                <div className="profile-container">
                    <div className="profile-image-section">
                        <div className="profile-image-container">
                            <img src={imageEvent} alt="Profile" />
                        </div>
                    </div>
                    <div className="profile-info-section">
                        <div className="user-info-section">
                            <h2>Informações do Utilizador</h2>
                            <div className="info-grid">
                                <div className="info-item">
                                    <p className="info-label">Nome Completo</p>
                                    <p className="info-value">John Doe</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-label">Data de Nascimento</p>
                                    <p className="info-value">01/01/1990</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-label">Email</p>
                                    <p className="info-value">john.doe@example.com</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-label">Telefone</p>
                                    <p className="info-value">+351 123 456 789</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-label">Número de Identificação Fiscal</p>
                                    <p className="info-value">123 456 789</p>
                                </div>
                            </div>
                        </div>

                        <div className="bank-info-section">
                            <h2>Informações Bancárias</h2>
                            <h3>Cartões Guardados</h3>
                            <div className="card-display-box">
                                <div className="card-name">Cartão Principal</div>
                                <div className="card-details">
                                    <div className="card-number-section">
                                        <div className="card-label">Número do Cartão</div>
                                        <div className="card-value">**** **** **** **** 9780</div>
                                    </div>
                                    <div className="card-expiry-section">
                                        <div className="card-label">Data de Validade</div>
                                        <div className="card-value">12/25</div>
                                    </div>
                                </div>
                                <div className="card-actions">
                                    <button className="card-btn remove-btn">Remover</button>
                                    <button className="card-btn edit-btn">Editar</button>
                                </div>
                            </div>
                            <button className="add-card-btn" onClick={handleAddCard}>Adicionar Novo Cartão</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile; 