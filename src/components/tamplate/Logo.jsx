import React from "react";
import logo from '../../assets/imgs/you3.png'
import './Logo.css'
import { Link } from "react-router-dom";

export default props => {
    return (
        <aside className="logo">
            <Link to="/" className="logo">
                <img src={logo} alt="logo" />
            </Link>
        </aside>
    )
}

