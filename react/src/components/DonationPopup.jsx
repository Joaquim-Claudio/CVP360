import React from 'react';
import imageEvent from "../assets/images/imageEvent.png";

const DonationPopup = () => {
    return (
        <div style={{ display: 'flex', gap: '10px', textAlign: 'start', height: '350px' }}>
            <div style={{ width: '35%', height: '100%' }}>
                <img 
                    src={imageEvent} 
                    style={{ width: '95%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} 
                    alt="Event Image"
                />
            </div>
            <div style={{ width: '65%', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
                <h3 style={{ marginBottom: '5px', color: '#333', fontSize: '1.5rem' }}>Doação de Sangue</h3>
                <p style={{ color: '#666', marginBottom: '20px', fontSize: '0.7rem' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <p style={{ color: '#000', fontSize: '0.85rem', marginBottom: '20px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <div style={{ width: '100%', height: '1px', background: 'linear-gradient(45deg, #FF0000, #DB0071)' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', position: 'absolute', bottom: '0', left: '0', right: '0', paddingTop: '15px' }}>
                    <span style={{ background: 'linear-gradient(45deg, #FF0000, #DB0071)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '500', fontSize: '0.7rem' }}>
                        APOIAR O PROJETO
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ fontWeight: '500', color: '#333', fontSize: '0.75rem' }}>Doação mensal</span>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <button className="swal2-cancel swal2-styled" style={{ background: '#f8f9fa !important', color: '#333 !important', borderRadius: '25px !important', padding: '8px 25px !important' }}>
                            Cancelar
                        </button>
                        <button className="swal2-confirm swal2-styled" style={{ background: 'linear-gradient(45deg, #FF0000, #DB0071) !important', borderRadius: '25px !important', padding: '8px 25px !important' }}>
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationPopup; 