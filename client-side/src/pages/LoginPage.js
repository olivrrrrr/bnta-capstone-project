import axios from 'axios'
import React from 'react'
import LoginForm from '../components/LoginForm.js'
import RegisterForm from '../components/RegisterForm.js'
import {useNavigate} from 'react-router-dom'

function LoginPage({setData}) {

    const navigate = useNavigate();

    const onLoginFormSubmit = (email, password) => {

            axios.get(`http://localhost:8080/api/v1/users/email=${email}`)
            .then(user => {
                console.log(user.data.password);
                if (password === user.data.password) {
                    setData(user.data.id)
                    navigate("/userpage")
                }
                else {
                    alert('incorrect email or password.')
                }
            })
            .catch(err => alert('user with this email does not exist'))
    } 

    return (

       <div>
           <LoginForm onLoginFormSubmit={onLoginFormSubmit}></LoginForm>
           <RegisterForm></RegisterForm> 
       </div>
    )
}

export default LoginPage
