import React, {useState, useEffect} from 'react'

function LoginForm({onLoginFormSubmit}) {

    const [identity, setIdentity] = useState("");
    const [password, setPassword] = useState("");

    const handleIdentityChange = (event) => {
        setIdentity(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        onLoginFormSubmit(identity, password);

        setIdentity("")
        setPassword("")

    }

    return (
        <div className="login-display">
            <h2>Sign in</h2>
            <form onSubmit={handleFormSubmission}>
                <div className="form-element">
                    <label htmlFor="username/email">Email:</label>
                    <input type="text" id="email" value={identity} onChange={handleIdentityChange} />
                </div>
                <div className="formElement">
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" value={password}
                        onChange={handlePasswordChange} />
                </div>
                <div className="formElement">
                    <input type="submit" value="Sign in"/>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
