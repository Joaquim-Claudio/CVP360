import React from "react";
import Calendar from "../assets/images/calendar.png";

function CardLand({image, title, text}){
    return(
        <div className="card cardLand mb-3 d-flex align-items-center" style={{ width: "100%", height: "150px" }}>
            <div className="row g-0 align-items-center w-100 h-100 ps-2">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={image} className="img-fluid rounded-start" alt="..." style={{ width: "90px" }} />
                </div>
                <div className="col-8 d-flex align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <span className="card-text textCardL">{text}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardLand;