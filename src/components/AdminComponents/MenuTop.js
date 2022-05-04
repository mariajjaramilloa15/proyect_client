import React from "react";
import Logo from "../../assets/img/jpg/logo.jpg";
import "./MenuTop.scss";

export default function MenuTop() {
    return(
        <div className="menu-top">
            <div className="menu-top_left">
                <img className="menu-top_left-logo" alt="Logo" src={Logo}></img>
            </div>
            <div className="menu-top_right">
                <h3>Logout</h3>
            </div>
        </div>
    );
}