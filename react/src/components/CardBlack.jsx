import React from "react";
import imageBlack from "../assets/images/imageBlack.png"

function CardBlack({title, text, type}){
    return(
        <div className="card rounded-5 bg-secondary-subtle" style={{width: "100%", height:"230px", overflow: "hidden"}}>
            <div className="card-image-container" style={{height: "70%", overflow: "hidden"}}>
                <img src={imageBlack} style={{width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
            <div className="card-content p-3" style={{height: "30%", overflow: "hidden"}}>
                <div className="fw-semibold fs-5 mb-1 text-truncate">{title}</div>
                <div className="text-muted small" style={{display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden"}}>{text}</div>
            </div>
        </div>
    )
}

export default CardBlack;