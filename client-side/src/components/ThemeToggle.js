import React, { useState, useEffect, useContext } from "react";
import '../styles/ThemeToggle.css'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    //const [toggled, setToggled] = useState(true)

    const swapMode = (e) => {
        let isChecked = e.target.checked;
        if (isChecked){
            theme.dispatch({type: "DARKMODE"})
            //setToggled(true)
            
        }
        else{
            theme.dispatch({type: "LIGHTMODE"})
            //setToggled(false)
            
        }
    }

    return (
        <div className = "toggle">
            <label className="switch">
                <input className="dark-mode-check"type="checkbox" onChange={swapMode} checked={darkMode}/>
                <span className="slider round"></span>
                <p>Dark mode</p>
            </label>
        </div>
    )
}

export default ThemeToggle;