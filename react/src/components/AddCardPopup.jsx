import React from 'react';
import Swal from 'sweetalert2';
import '../styles/AddCardPopup.scss';

function AddCardPopup() {
    return Swal.fire({
        html: `
            <div class="add-card-popup">
                <div class="title">
                    <h3>Adicionar Novo Cartão</h3>
                </div>
                <div class="card-number">
                    <div class="label">Número do Cartão</div>
                    <input type="text" placeholder="**** **** **** ****">
                </div>
                <div class="card-details">
                    <div class="detail-group">
                        <div class="label">Data de Validade</div>
                        <input type="text" placeholder="MM/AA">
                    </div>
                    <div class="detail-group">
                        <div class="label">Código de Segurança</div>
                        <input type="text" placeholder="***">
                    </div>
                </div>
                <div class="button-group">
                    <button class="swal2-cancel swal2-styled cancel-btn" onclick="event.preventDefault(); Swal.close();">Cancelar</button>
                    <button class="swal2-confirm swal2-styled confirm-btn" onclick="event.preventDefault(); Swal.close();">Adicionar</button>
                </div>
            </div>
        `,
        showCloseButton: true,
        showConfirmButton: false,
        width: '60%',
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

export default AddCardPopup; 