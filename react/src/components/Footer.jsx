import React from "react";
import LogoCol from "../assets/images/LogoColor.svg";
import HeartIcon from "../assets/images/heartmage.png";
import CruzIcon from "../assets/images/cruzVermelha.png";


function Footer(){
    return(
        <footer className="bg-secondary-subtle py-3 d-flex justify-content-between align-items-center px-3 mt-5">
            <img className="ms-2" src={LogoCol} alt="" style={{ width: "120px", height: "auto" }} />
    
            <div>
                <img className="me-4" src={HeartIcon} alt="" style={{ width: "120px", height: "auto" }} />
                <img className="me-2" src={CruzIcon} alt="" style={{ width: "120px", height: "auto" }} />
            </div>
        </footer>

    )
}

export default Footer;