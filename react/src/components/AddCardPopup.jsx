import React from 'react';
import Swal from 'sweetalert2';

function AddCardPopup() {
    return Swal.fire({
        html: `
            <div style="display: flex; flex-direction: column; text-align: start; padding: 20px;">
                <div style="margin-bottom: 30px;">
                    <h3 style="color: #333; font-size: 1.5rem;">Adicionar Novo Cartão</h3>
                </div>
                <div style="margin-bottom: 30px;">
                    <div style="font-size: 0.8rem; color: #666; margin-bottom: 5px;">Número do Cartão</div>
                    <input type="text" style="width: 100%; padding: 12px; border: 1px solid #dee2e6; border-radius: 5px; font-size: 0.9rem; outline: none; transition: border-color 0.2s;" placeholder="**** **** **** ****">
                </div>
                <div style="display: flex; gap: 20px;">
                    <div style="width: 50%;">
                        <div style="font-size: 0.8rem; color: #666; margin-bottom: 5px;">Data de Validade</div>
                        <input type="text" style="width: 100%; padding: 12px; border: 1px solid #dee2e6; border-radius: 5px; font-size: 0.9rem; outline: none; transition: border-color 0.2s;" placeholder="MM/AA">
                    </div>
                    <div style="width: 50%;">
                        <div style="font-size: 0.8rem; color: #666; margin-bottom: 5px;">Código de Segurança</div>
                        <input type="text" style="width: 100%; padding: 12px; border: 1px solid #dee2e6; border-radius: 5px; font-size: 0.9rem; outline: none; transition: border-color 0.2s;" placeholder="***">
                    </div>
                </div>
                <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 30px;">
                    <button class="swal2-cancel swal2-styled" style="background: #f8f9fa !important; color: #333 !important; border-radius: 25px !important; padding: 8px 25px !important;">Cancelar</button>
                    <button class="swal2-confirm swal2-styled" style="background: linear-gradient(45deg, #FF0000, #DB0071) !important; border-radius: 25px !important; padding: 8px 25px !important;">Adicionar</button>
                </div>
            </div>
        `,
        showCloseButton: true,
        showConfirmButton: false,
        width: '60%',
        customClass: {
            popup: 'swal2-popup-custom'
        }
    });
}

export default AddCardPopup; 