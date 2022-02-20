import React from "react";
import './firtTask.css';
export const Button =({
    children,
    type,
    onClick,

}) => {

    return(
        <button style={{background:children.lastBG}}  onClick={onClick} type={type}>
            {children}
        </button>
        
    )
};

export default Button;