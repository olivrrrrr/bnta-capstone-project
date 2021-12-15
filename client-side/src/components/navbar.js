import { React, useState } from 'react'
import './Navbar.css'
import MobileNavigation from './MobileNavigation';
import { FaSun, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"

function Navbar({ handleType, filter }) {

    const [mode, setMode] = useState(false);
    const [open, setOpen] = useState(false);


    // const handleOnClick = () => {
    //     setMode(!mode);
    // }
    
    // Light to Dark Theme 
    const changeTheme = () => {
        const moon = document.querySelector('.moon')
        const navbar = document.querySelector('.navbar-container-bckg-dark')
        const sidebar = document.querySelector('.sidebar')
        const list = document.querySelector('.list')
        const component = document.querySelectorAll('.component')
       

        moon.addEventListener('click', () => {
            document.body.classList.toggle('light-theme')
            navbar.classList.toggle('light-theme')
            sidebar.classList.toggle('light-theme')
            list.classList.toggle('light-theme')
            

            component.forEach((c) => {
                c.classList.toggle('light-theme')
            })

            setMode(!mode);
        })
    }


    const closeMobileMenu = () => setOpen(false)

    return (
        <section className="navbar-container navbar-container-bckg-dark ">
            <div className="navbar">
                <div className="navbar-logo navbar-logo--white">
                    <img src={`${process.env.PUBLIC_URL}/assets/navbar/BlueChickenFMLogo.png`} alt="logo" />
                    <h1 className="navbar-logo-title">Fantasy Super League</h1>
                    <div className="navbar-burger">
                        {open ? <AiOutlineClose onClick={() => setOpen(!open)} /> : <GiHamburgerMenu onClick={() => setOpen(!open)} />}
                    </div>
                </div>
                <div className="navbar-right">
                    <div className="navbar-search">
                        <input className="navbar-search-searchbar" type="search" size="15" placeholder="Search..." value={filter} onChange={handleType} />
                    </div>
                    <div className="navbar-toggle">
                        {mode ?
                            (<FaSun className="moon" onClick={() => changeTheme()} />)
                            :
                            (<FaMoon className="moon" onClick={() => changeTheme()}/>)
                            }
                    </div>
                    {open && <MobileNavigation isMobile={true} closeMobileMenu={closeMobileMenu} />}
                </div>
            </div>
        </section>
    )
}

export default Navbar