import React from "react";

function LoginInput({placeholder, value, autoComplete, type, onChange}){
    return(
        <input 
        type={type}
        className="LoginInput"
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}/>
    )
}


// function InputElement({placeholder , icon, label, forId, classInput, type}){ 
//     return(
//     <div className={classInput || "form-item"}>
//         {label != null ? <label className="d-block" htmlFor={forId} >{label}</label> : ""}
//         <input type={type}  id={forId}   placeholder={placeholder}/>
//     </div>    

//     );

    

// }

export default LoginInput;