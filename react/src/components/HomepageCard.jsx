 import React from "react";
 import Swal from 'sweetalert2';
 
 function HomepageCard({day, month, image, title, subtitle, context, btnTxt}) {

    const handleClick = () => {
        Swal.fire({
                html: `
                    <div class="subscribe-popup">
                        <div class="image-section">
                            <img src="${image}" alt="Event Image">
                        </div>
                        <div class="content-section">
                            <h3>${title}</h3>
                            <p class="description">${subtitle}</p>
                            <p class="details">${context}</p>
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
                                    <input class="swal2-imput" type="number" placeholder="Valor a doar" />
                                    <button class="swal2-confirm swal2-styled confirm-btn" onclick="event.preventDefault(); Swal.close();">Inscrever</button>
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
        }
    return (
    
    
 
 <div className="homepage-card">
                            <div className="card-image-container">
                                <img src={image} alt="Event 1" className="card-image" />
                                <div className="date-box">
                                    <span className="day">{String(day).padStart(2, "0")}</span>
                                    <span className="month">{String(month).padStart(2, "0")}</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <h1>{title}</h1>
                                <h4>{subtitle}</h4>
                                <h3>{context}</h3>
                            <input class="LoginInput" type="number" placeholder="Valor a doar" />
                            </div>
                            <button className="saber-mais-btn" onClick={handleClick}>
                                {btnTxt}
                            </button>
                        </div>


     )}
     export default HomepageCard