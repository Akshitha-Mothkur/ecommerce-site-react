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
                    <li><NavLink to={'/fasapp'}>Fashion</NavLink></li>
                    <li><NavLink to={'/beauty'}>Beauty</NavLink></li>
                    <li><NavLink to={'/electronics'}>Electronics & gadets</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar