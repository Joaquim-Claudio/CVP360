import React from "react";
import imageBlack from "../assets/images/imageBlack.png"

function CardBlack({text, type}){
    return(
        <div className="card rounded-5 bg-secondary-subtle" style={{width: "350px", height:"230px"}}>
            <div className="card-image-container">
                <img src={imageBlack}   style={{width: "350px"}} />
            </div>
            <div className="card-content">
                <div className="fw-semibold fs-5 ps-5 pt-3">Apoio a Idosos</div>
            </div>
        </div>
    )
}

export default CardBlack;