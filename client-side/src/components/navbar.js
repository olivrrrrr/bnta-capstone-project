import React from 'react'
import logo from '../assets/Super_League_dark_mode.png'
import {Routes, Route, Router} from 'react-router-dom';
import './Navbar.css'
import ThemeToggle from './ThemeToggle';



function Navbar() {
    return (
        <section className="navbar-container">
            <div className="navbar-logo">
                <img src={logo} />
            </div>
            <div className="navbar-selection">
                    <ul>
                        <li> <a href="/userpage">My Team</a></li>
                        <li> <a href="/leaderboard">Leaderboard</a></li>
                        <li> <a href="/adminpage">Admin</a></li>
                        <li> <a href="/">Log Out</a></li>
                    </ul>
            </div>  
                 
        </section>
    )
}

export default Navbar
