import React from "react";
import {NavLink} from "react-router-dom"
import './Navbar.css'
function Navbar(){
    return(
        <div className="navbar">
            <div className="webname">
                <h2>The Shopping <span>World</span></h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/fasapp'}>Fashion&apperal</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar