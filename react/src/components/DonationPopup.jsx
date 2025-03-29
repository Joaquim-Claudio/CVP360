import React from 'react';
import imageEvent from "../assets/images/imageEvent.png";
import '../styles/DonationPopup.scss';

const DonationPopup = () => {
    return (
        <div className="donation-popup">
            <div className="image-section">
                <img 
                    src={imageEvent} 
                    alt="Event Image"
                />
            </div>
            <div className="content-section">
                <h3>Doação de Sangue</h3>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <p className="details">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <div className="divider"></div>
                <div className="bottom-section">
                    <span className="support-text">
                        APOIAR O PROJETO
                    </span>
                    <div className="monthly-donation">
                        <span>Doação mensal</span>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="button-group">
                        <button className="swal2-cancel swal2-styled cancel-btn">
                            Cancelar
                        </button>
                        <button className="swal2-confirm swal2-styled confirm-btn">
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationPopup; 