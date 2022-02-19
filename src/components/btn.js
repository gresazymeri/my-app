import React from "react";
import './index.css'

const STYLES=[
    "btn--primary--solid",
    "btn--success--outline",
    "btn--danger--dark"
]
const SIZES=[
    "sm",
    "med",
    "big"
]
export const Button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
})=>{
    const checkButtonStyle=STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];
    const checkButtonSize=SIZES.includes(buttonSize)?buttonSize:SIZES[0];


    return(
        <button  onClick={onClick} type={type}>
            {children}
        </button>
        
    )
};

export default Button;