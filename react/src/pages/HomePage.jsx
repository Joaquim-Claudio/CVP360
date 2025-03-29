import React from "react";
import { Link } from "react-router-dom";
import Frame1 from "../assets/images/Frame1.png";
import imageEvent from "../assets/images/imageEvent.png";

function HomePage(){
    return(
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand fw-lighter text-light fs-2" href="#">CVP<span className="fs-2 fw-bold text-light">360</span></a>
                    <div className="nav-links">
                        <Link to="/" className="text-light text-decoration-none me-3 px-5">Home</Link>
                        <Link to="/doacao" className="text-light text-decoration-none pr-5">Doação</Link>
                    </div>
                    <div className="user-info">
                        <div className="user-details">
                            <div className="user-name">John Doe</div>
                            <div className="user-role">Volunteer</div>
                        </div>
                        <div className="user-image">
                            <img src={imageEvent} alt="User Profile" />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="main-content">
                <img src={Frame1} alt="Frame1" className="img-fluid w-100" style={{ height: '50vh', objectFit: 'cover' }} />
            </div>
            <div className="container mt-5">
                <h1 className="mb-3 mt-5">Eventos</h1>
                <div className="event-cards-container">
                    <div className="event-cards-row">
                        <div className="event-card">
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
                        <div className="event-card">
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
                        <div className="event-card">
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
                        <div className="event-card">
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
                        <div className="event-card">
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
                        <div className="event-card">
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
                <h1 className="mb-3">Projetos</h1>
                <div className="event-cards-container">
                    <div className="event-cards-row">
                        <div className="event-card">
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
                            <button className="saber-mais-btn">Inscreve-se</button>
                        </div>
                        <div className="event-card">
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
                            <button className="saber-mais-btn">Inscreve-se</button>
                        </div>
                        <div className="event-card">
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
                            <button className="saber-mais-btn">Inscreve-se</button>
                        </div>
                        <div className="event-card">
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
                            <button className="saber-mais-btn">Inscreve-se</button>
                        </div>
                        <div className="event-card">
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
                            <button className="saber-mais-btn">Inscreve-se</button>
                        </div>
                        <div className="event-card">
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
                            <button className="saber-mais-btn">Inscreve-se</button>
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