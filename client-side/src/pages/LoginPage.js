import axios from 'axios'
import React from 'react'
import LoginForm from '../components/LoginForm.js'
import RegisterForm from '../components/RegisterForm.js'
import { useNavigate } from 'react-router-dom'
import '../styles/LoginPage.css'
import bcrypt from 'bcryptjs'


function LoginPage({ setData }) {

    const navigate = useNavigate();

    const onLoginFormSubmit = (email, password) => {

        console.log(email)
        let loginUser = {};

        axios.get(`http://localhost:8080/api/v1/users/email=${email}`)
            .then((user) => {
                loginUser = user;
                bcrypt.compare(password, user.data.password)
                .then((result) => {
                    console.log(result);
                    if (result) {
                        setData(loginUser.data.id)
                        navigate("/userpage")
                    }
                    else {
                        alert('incorrect email or password.')
                    }

            })})
            .catch(() => alert('user with this email does not exist'))
            
            // .catch(() => alert('user with this email does not exist'))
        //     if (bcrypt.compare(user.password, password)) {
        //         setData(user.data.id)
        //         navigate("/userpage")
        //     }
        //     else {
        //         alert('incorrect email or password.')
        //     }
        // })
        // .catch(() => alert('user with this email does not exist'))
    }

    const onRegisterFormSubmit = (user) => {
        axios.post("http://localhost:8080/api/v1/users/addUser", user)
            .then(() => axios.get(`http://localhost:8080/api/v1/users/email=${user.email}`))
            .then(response => {
                setData(response.data.id)
                navigate("/userpage")
            }
            )
            .catch(() => alert('error adding user'))
    }

    return (

        <div className="login-page">
            <img className="super-league-logo" src="superleaguedark.png"/>
            <LoginForm onLoginFormSubmit={onLoginFormSubmit}></LoginForm>
            <RegisterForm onRegisterFormSubmit={onRegisterFormSubmit}></RegisterForm>
        </div>
    )
}

export default LoginPage
