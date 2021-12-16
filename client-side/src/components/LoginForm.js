import React, {useState, useEffect, useContext} from 'react'
import bcrypt from 'bcryptjs'
import '../styles/LoginForm.css'
import { ThemeContext } from '../contexts/ThemeContext';


//https://medium.com/boca-code/how-to-encrypt-password-in-your-react-app-before-you-send-it-to-the-api-6e10a06f0a8e
const salt = bcrypt.genSaltSync(10);

function LoginForm({onLoginFormSubmit}) {

    const [identity, setIdentity] = useState("");
    const [password, setPassword] = useState("");
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleIdentityChange = (event) => {
        setIdentity(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        // const hashedPassword = bcrypt.hashSync(password, salt)

        // console.log(hashedPassword)

        onLoginFormSubmit(identity, password);

        setIdentity("")
        setPassword("")

    }

    //{`container ${darkMode? "container-dark" : "container-light" }`}
    return (
        <div className={`login-display ${darkMode? "login-dark" : "login-light"} `}>
            <h2>Sign in</h2>
            <form onSubmit={handleFormSubmission}>
                <div className="form-element">
                    <label htmlFor="username/email">Email:</label>
                    <input type="text" id="email" value={identity} onChange={handleIdentityChange} />
                </div>
                <div className="form-element">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={password}
                        onChange={handlePasswordChange} />
                </div>
                <div className="submit-button">
                    <input type="submit" value="Sign in"/>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
