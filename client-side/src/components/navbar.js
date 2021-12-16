import {React, useState} from 'react'
import logo from '../assets/Super_League_dark_mode.png'
import {Routes, Route, Router} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"
import './Navbar.css'
import MobileNavigation from './MobileNavigation';



function Navbar() {


    const [open, setOpen] = useState(false);
    const closeMobileMenu = () => setOpen(false)


    return (
        <section className="navbar-container">
           
           
            <div className="navbar-logo">
            <div className="navbar-burger">
                        {open ? <AiOutlineClose onClick={() => setOpen(!open)}/> : <GiHamburgerMenu onClick={() => setOpen(!open)}/>}
                </div>
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
                {open && <MobileNavigation isMobile={true} closeMobileMenu={closeMobileMenu} />}
              
        </section>
    )
}

export default Navbar
