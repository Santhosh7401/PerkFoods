import React from "react";
import './Navbar.css';

const Navbar =()=>{
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src="" alt=""/>
                <p>Shopper</p>

            </div>

            <ul className="nav-menu">
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="login-cart">
                <button>Login</button>
                <img src="" alt=""></img>
            </div>

        </div>
    )
}

export default  Navbar;