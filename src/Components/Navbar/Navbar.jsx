import React, { useState } from "react";
import './Navbar.css';
import {  } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

 

const Navbar =()=>{

    const [menu,setMenu]=useState("Shop")
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src="" alt=""/>
                <p>PERK</p>

            </div>

            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}> Home {menu==="shop"?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("mens")}}> Menu {menu==="mens"?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("womens")}}> About {menu==="womens"?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("kids")}}> Contact {menu==="kids"?<hr/>:<></>} </li>
            </ul>

            <div className="login-cart">
                <h1><IoCartOutline /></h1>
                <div className="cart-count">0</div>
                <button>Login</button>
                
            </div>

        </div>
    )
}

export default  Navbar;