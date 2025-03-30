 import React from "react";
 import { Link } from "react-router-dom";
 import Frame1 from "../assets/images/Frame1.png";
 import Logo from "../assets/images/LogoCVP.svg";
 
 function Navbar({user}) {

    return (
        <nav className="navbar ps-2" style={{ height: "78px" }}>
            <div className="container-fluid">
                <a className="navbar-brand fw-lighter " href=""><img src={Logo} alt="" style={{ width: "100px", height: "auto" }}/></a>
                <div className="nav-links">
                    <Link to="/home" className="text-light  fw-semibold text-decoration-none me-3 px-5">Home</Link>
                    <Link to="/donations" className="text-light fw-semibold text-decoration-none pr-5">Doação</Link>
                </div>
                <div className="user-info">
                    <div className="user-details pe-2">
                    <div className="user-name">{user.fullName}</div>
                    <div className="user-role">{user.profile.extendedName}</div>
                    </div>
                    <Link to="/profile" className="user-image">
                        <img src={Frame1} alt="User Profile" />
                    </Link>
                </div>
            </div>
        </nav>

     )}
     export default Navbar



