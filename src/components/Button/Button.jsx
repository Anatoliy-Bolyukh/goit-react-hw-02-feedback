import React from "react";
import css from "../Button/button.module.css"

const Button = ({ children }) => {
    // console.log(children);
    return (
        <>
            {children.map(child => {
                return (
                    <button className={css.buttom} type="button" name={child} key={child}>{child}</button>
                )
            })}

        </>
    )
};

export default Button



