import React from "react";
import Swal from 'sweetalert2';
import imageEvent from "../assets/images/imageEvent.png"; 

function SubscribeAlert() {

    // Função para exibir o alerta de inscrição
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
                                <button class="swal2-cancel swal2-styled cancel-btn" onClick={(e) => {e.preventDefault(); Swal.close();}}>Cancelar</button>
                                <button class="swal2-confirm swal2-styled confirm-btn" onClick={(e) => {e.preventDefault(); Swal.close();}}>Confirmar</button>
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

    // JSX que retorna o componente
    return (
        <div>
            <button onClick={handleSubscribe}>Inscrever-se</button>
        </div>
    );
}

export default SubscribeAlert;
