import React from "react";

function LoginInput({label, placeholder}){
    return(
        <input className="LoginInput" type="text"
        placeholder={placeholder} />
    )
}

export default LoginInput;