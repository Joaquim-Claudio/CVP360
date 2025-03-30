import React from "react";

function LoginButton({text, type}){
    return(
        <button className="LogBut fw-semibold fs-6" type={type}
        >
            {text}
        </button>
    )
}

export default LoginButton;