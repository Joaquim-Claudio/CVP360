import React from "react";
import { Link } from "react-router-dom";
import Frame1 from "../assets/images/Frame1.png";
import imageEvent from "../assets/images/imageEvent.png";
import Swal from 'sweetalert2';
import ImageCarousel from "../components/ImageCarousel";

function HomePage(){
    const handleSubscribe = () => {
        Swal.fire({
            html: `
                <div style="display: flex; gap: 10px; text-align: start;">
                    <div style="width: 35%; height: 100%;">
                        <img src="${imageEvent}" style="width: 95%; height: 350px; object-fit: cover; border-radius: 15px;" alt="Event Image">
                    </div>
                    <div style="width: 65%; display: flex; flex-direction: column; height: 100%;">
                        <h3 style="margin-bottom: 5px; color: #333; font-size: 1.5rem;">Doação de Sangue</h3>
                        <p style="color: #666; margin-bottom: 30px; font-size: 0.7rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <p style="color: #000; font-size: 0.85rem; margin-bottom: 120px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <div style="width: 100%; height: 1px; background: linear-gradient(45deg, #FF0000, #DB0071);"></div>
                        <div style="display: flex; flex-direction: column; gap: 5px; padding-top: 5px;">
                            <span style="background: linear-gradient(45deg, #FF0000, #DB0071); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 500; font-size: 0.7rem;">APOIAR O PROJETO</span>
                            <div style="display: flex; align-items: center; gap: 5px;">
                                <span style="font-weight: 500; color: #333; font-size: 0.75rem;">Doação mensal</span>
                                <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                                <button class="swal2-cancel swal2-styled" style="background: #f8f9fa !important; color: #333 !important; border-radius: 25px !important; padding: 8px 25px !important;">Cancelar</button>
                                <button class="swal2-confirm swal2-styled" style="background: linear-gradient(45deg, #FF0000, #DB0071) !important; border-radius: 25px !important; padding: 8px 25px !important;">Confirmar</button>
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
            }
        });
    };

    return(
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
        </>
    )
}

export default HomePage;