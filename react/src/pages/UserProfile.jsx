import React from "react";
import { Link } from "react-router-dom";
import imageEvent from "../assets/images/imageEvent.png";
import AddCardPopup from "../components/AddCardPopup";
import Logo from "../assets/images/LogoCVP.svg";
import Footer from "../components/Footer"
import Frame1 from "../assets/images/Frame1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function UserProfile({ user }) {
    const logout_url=import.meta.env.VITE_ACCOUNT_LOGOUT_URL
    const handleAddCard = () => {
        AddCardPopup();
    };

    return (
        <>
            <nav className="navbar ps-2" style={{ height: "78px" }}>
                <div className="container-fluid">
                    <a className="navbar-brand fw-lighter " href="#">
                        <img src={Logo} alt="Logo" style={{ width: "100px", height: "auto" }} />
                    </a>
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

            <div className="container mt-5">
                <div className="profile-container">
                    <div className="profile-image-section">
                        <div className="profile-image-container">
                            <img src={Frame1} alt="Profile" />
                        </div>
                        <div className="card-actions pt-5">
                            <a className="text-dark" href={logout_url}>Terminar Sessão</a>
                        </div>
                    </div>
                    <div className="profile-info-section">
                        <div className="user-info-section">
                            <h2>Informações do Utilizador</h2>
                            <div className="info-grid">
                                <div className="info-item">
                                    <p className="info-label fw-bold">Nome Completo</p>
                                    <p className="info-value fs-6">{user.fullName}</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-label fw-bold">Data de Nascimento</p>
                                    <p className="info-value fs-6">{user.birthDate}</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-label fw-bold">Email</p>
                                    <p className="info-value fs-6">{user.email}</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-label fw-bold">Telefone</p>
                                    <p className="info-value fs-6">{user.phoneNumber}</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-label fw-bold">Número de Identificação Fiscal</p>
                                    <p className="info-value fs-6">{user.nif}</p>
                                </div>
                            </div>
                        </div>

                        {/* Verificação de cartões */}
                        <div className="bank-info-section">
                            <h2>Informações Bancárias</h2>
                            <h3>Cartões Guardados</h3>

                            {user.creditCards?.$values?.length > 0 ? (
                                <div className="card-display-box">
                                    <div className="card-name">Cartão Principal</div>
                                    <div className="card-details">
                                        <div className="card-number-section">
                                            <div className="card-label">Número do Cartão</div>
                                            <div className="card-value">{user.creditCards.$values[0].number}</div>
                                        </div>
                                        <div className="card-expiry-section">
                                            <div className="card-label">Data de Validade</div>
                                            <div className="card-value">{user.creditCards.$values[0].expireDate}</div>
                                        </div>
                                    </div>
                                    <div className="card-actions">
                                        <button className="card-btn edit-btn">Remover</button>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-danger mt-3">Não tem nenhum cartão registado.</p>
                            )}

                            <button className="add-card-btn" onClick={handleAddCard}>Adicionar Novo Cartão</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default UserProfile;
