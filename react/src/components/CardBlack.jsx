import React from "react";
import imageBlack from "../assets/images/imageBlack.png"

function CardBlack({ title, type, image }) {
    return (
        <div className="card rounded-5 bg-secondary-subtle" style={{ width: "350px", height: "230px", overflow: "hidden" }}>
            <div className="card-image-container" style={{ width: "100%", height: "180px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img className="rounded-5 object-fit-cover" src={image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="card-content">
                <div className="fw-semibold fs-5 ps-5 pt-3">{title}</div>
            </div>
        </div>
    );
}


export default CardBlack;