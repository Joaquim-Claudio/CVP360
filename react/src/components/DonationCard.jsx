 import React from "react";
 import Swal from 'sweetalert2';
 
 function DonationCard({image, projectTitle, projectSubtitle, projectContext, value}) {

    const handleClick = () => {
        Swal.fire({
                html: `
                    <div class="subscribe-popup">
                        <div class="image-section">
                            <img src="${image}" alt="Event Image">
                        </div>
                        <div class="content-section">
                            <h3>${projectTitle}</h3>
                            <p class="description">${projectSubtitle}</p>
                            <p class="details">${projectContext}</p>
                            <div class="divider"></div>
                            <div class="bottom-section">
                                <span class="support-text">GERIR INSCRIÇÃO</span>
                                <div class="button-group">
                                    <button class="swal2-confirm swal2-styled cancel-btn" onclick="event.preventDefault(); Swal.close();">Alterar valor</button>
                                    <button class="swal2-confirm swal2-styled confirm-btn" onclick="event.preventDefault(); Swal.close();">Encerrar</button>
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
        <div className="donation-card" onClick={handleClick}>
            <div className="card-image-container">
                <img src={image} alt="Donation 1" className="card-image" />
                <div className="price-box">
                    <span className="amount">{value}</span>
                    <span className="currency">€</span>
                </div>
            </div>
            <div className="card-content">
                <h1>{projectTitle}</h1>
                <h4>{projectSubtitle}</h4>
                <h3>{projectContext}</h3>
            </div>
        </div>


     )}
     export default DonationCard