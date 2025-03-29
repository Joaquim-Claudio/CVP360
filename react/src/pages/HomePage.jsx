import React from "react";
import { Link } from "react-router-dom";
import Frame1 from "../assets/images/Frame1.png";
import imageEvent from "../assets/images/imageEvent.png";
import Swal from 'sweetalert2';
import ImageCarousel from "../components/ImageCarousel";
import '../styles/SubscribePopup.scss';
import Logo from "../assets/images/LogoCVP.svg";
import Footer from "../components/Footer";

function HomePage(){
    const handleSubscribe = () => {
        Swal.fire({
            html: `
                <div class="subscribe-popup">
                    <div class="image-section">
                        <img src="${imageEvent}" alt="Event Image">
                    </div>
                    <div class="content-section">
                        <h3>Doação de Sangue</h3>
                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <p class="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <div class="divider"></div>
                        <div class="bottom-section">
                            <span class="support-text">APOIAR O PROJETO</span>
                            <div class="monthly-donation">
                                <span>Doação mensal</span>
                                <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div class="button-group">
                                <button class="swal2-cancel swal2-styled cancel-btn" onclick="event.preventDefault(); Swal.close();">Cancelar</button>
                                <button class="swal2-confirm swal2-styled confirm-btn" onclick="event.preventDefault(); Swal.close();">Confirmar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            showCloseButton: true,
            showConfirmButton: false,
            width: '70%',
            customClass: {
                popup: 'swal2-popup-custom'
            },
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: '',
            cancelButtonText: '',
            denyButtonText: ''
        });
    };

    return(
        <>
        <nav className="navbar ps-2" style={{ height: "78px" }}>
        <div className="container-fluid">
                   <a className="navbar-brand fw-lighter " href="#"><img src={Logo} alt="" style={{ width: "100px", height: "auto" }}/></a>
                    <div className="nav-links">
                        <Link to="/home" className="text-light  fw-semiboldtext-decoration-none me-3 px-5">Home</Link>
                        <Link to="/doacao" className="text-light fw-semibold text-decoration-none pr-5">Doação</Link>
                    </div>
                    <div className="user-info">
                        <div className="user-details pe-2">
                            <div className="user-name">John Doe</div>
                            <div className="user-role">Volunteer</div>
                        </div>
                        <Link to="/profile" className="user-image">
                            <img src={imageEvent} alt="User Profile" />
                        </Link>
                    </div>
        </div>
        </nav>
            <div className="main-content">
                <ImageCarousel />
            </div>
            <div className="container mt-5">
                <h1 className="mb-3 mt-5">Eventos</h1>
                <div className="homepage-cards-container">
                    <div className="homepage-cards-row">
                        <div className="homepage-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Event 1" className="card-image" />
                                <div className="date-box">
                                    <span className="day">08</span>
                                    <span className="month">March</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 1</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 1</h4>
                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                            </div>
                            <button className="saber-mais-btn">Saber mais</button>
                        </div>
                        <div className="homepage-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Event 2" className="card-image" />
                                <div className="date-box">
                                    <span className="day">15</span>
                                    <span className="month">March</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 2</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 2</h4>
                                <h3>Descrição do Doação de Sangue no Centro de Saúde dos Olivais 2</h3>
                            </div>
                            <button className="saber-mais-btn">Saber mais</button>
                        </div>
                        <div className="homepage-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Event 3" className="card-image" />
                                <div className="date-box">
                                    <span className="day">22</span>
                                    <span className="month">March</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 3</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 3</h4>
                                <h3>Descrição do Doação de Sangue no Centro de Saúde dos Olivais 3</h3>
                            </div>
                            <button className="saber-mais-btn">Saber mais</button>
                        </div>
                        <div className="homepage-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Event 4" className="card-image" />
                                <div className="date-box">
                                    <span className="day">29</span>
                                    <span className="month">March</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 4</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 4</h4>
                                <h3>Descrição do Doação de Sangue no Centro de Saúde dos Olivais 4</h3>
                            </div>
                            <button className="saber-mais-btn">Saber mais</button>
                        </div>
                        <div className="homepage-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Event 5" className="card-image" />
                                <div className="date-box">
                                    <span className="day">05</span>
                                    <span className="month">April</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 5</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 5</h4>
                                <h3>Descrição do Doação de Sangue no Centro de Saúde dos Olivais 5</h3>
                            </div>
                            <button className="saber-mais-btn">Saber mais</button>
                        </div>
                        <div className="homepage-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Event 6" className="card-image" />
                                <div className="date-box">
                                    <span className="day">12</span>
                                    <span className="month">April</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 6</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 6</h4>
                                <h3>Descrição do Doação de Sangue no Centro de Saúde dos Olivais 6</h3>
                            </div>
                            <button className="saber-mais-btn">Saber mais</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="section-divider"></div>
                <h1 className="mb-3 mt-5">Projetos</h1>
                <div className="homepage-cards-container">
                    <div className="homepage-cards-row">
                        <div className="homepage-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Event 1" className="card-image" />
                                <div className="date-box">
                                    <span className="day">19</span>
                                    <span className="month">April</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 1</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 1</h4>
                                <h3>Descrição do Doação de Sangue no Centro de Saúde dos Olivais 1</h3>
                            </div>
                            <button className="saber-mais-btn" onClick={handleSubscribe}>Inscreve-se</button>
                        </div>
                        <div className="homepage-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Event 2" className="card-image" />
                                <div className="date-box">
                                    <span className="day">26</span>
                                    <span className="month">April</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 2</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 2</h4>
                                <h3>Descrição do Doação de Sangue no Centro de Saúde dos Olivais 2</h3>
                            </div>
                            <button className="saber-mais-btn" onClick={handleSubscribe}>Inscreve-se</button>
                        </div>
                        <div className="homepage-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Event 3" className="card-image" />
                                <div className="date-box">
                                    <span className="day">03</span>
                                    <span className="month">May</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 3</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 3</h4>
                                <h3>Descrição do Doação de Sangue no Centro de Saúde dos Olivais 3</h3>
                            </div>
                            <button className="saber-mais-btn" onClick={handleSubscribe}>Inscreve-se</button>
                        </div>
                        <div className="homepage-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Event 4" className="card-image" />
                                <div className="date-box">
                                    <span className="day">10</span>
                                    <span className="month">May</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 4</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 4</h4>
                                <h3>Descrição do Doação de Sangue no Centro de Saúde dos Olivais 4</h3>
                            </div>
                            <button className="saber-mais-btn" onClick={handleSubscribe}>Inscreve-se</button>
                        </div>
                        <div className="homepage-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Event 5" className="card-image" />
                                <div className="date-box">
                                    <span className="day">17</span>
                                    <span className="month">May</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 5</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 5</h4>
                                <h3>Descrição do Doação de Sangue no Centro de Saúde dos Olivais 5</h3>
                            </div>
                            <button className="saber-mais-btn" onClick={handleSubscribe}>Inscreve-se</button>
                        </div>
                        <div className="homepage-card">
                            <div className="card-image-container">
                                <img src={imageEvent} alt="Event 6" className="card-image" />
                                <div className="date-box">
                                    <span className="day">24</span>
                                    <span className="month">May</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>Doação de Sangue no Centro de Saúde dos Olivais 6</h1>
                                <h4>Subtítulo do Doação de Sangue no Centro de Saúde dos Olivais 6</h4>
                                <h3>Descrição do Doação de Sangue no Centro de Saúde dos Olivais 6</h3>
                            </div>
                            <button className="saber-mais-btn" onClick={handleSubscribe}>Inscreve-se</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="section-divider"></div>
                <h1 className="mb-3">Doação</h1>
            </div>
            <Footer/>
        </>
    )
}

export default HomePage;