import React, { useState } from 'react';
import Input, { Label } from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../../assets/img/logoGB.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './LoginPage.css';
import axios from 'axios';

const LoginPage = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const toggleInputType = () => setShowPassword(!showPassword);
    // Hanya demo saja
    const handleInputChange = (e, isPassword = false) => {
        if (isPassword) {
            setUserPassword(e.target.value)
        } else
            setUserName(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (userName) {
            axios.post('https://9097-103-83-93-131.ap.ngrok.io/api/v1/users', {
                email: userName,
                password: userPassword
            }, {
                headers: { 'Access-Control-Allow-Origin': '*' }
            })
                .then(function (response) {
                    console.log("Response", response);
                })
                .catch(function (error) {
                    console.log(error);
                });

            // localStorage.setItem('username', userName);
            // props.history.push('/home');
        }
    }


    return (
        <div id="login-page">
            <img src={Logo} alt="Buku Kita" width="70" />
            <h1>Login to GedeBOOK</h1>
            <form className="form-group">
                <Label id="username" title="Nama pengguna" >
                    <Input onChange={(e) => handleInputChange(e, false)} variant="line" />
                </Label>
                <Label id="password" title="Password" >
                    <Input onChange={(e) => handleInputChange(e, true)} type={showPassword ? 'text' : 'password'} variant="line" />
                </Label>
                {showPassword ? <FaEye onClick={toggleInputType} className="eye-button" /> :
                    <FaEyeSlash onClick={toggleInputType} className="eye-button" />}
                <Button onClick={handleLogin} variant="primary">Masuk</Button>
                <span>
                    <Link to="/account/reset">Lupa password?</Link>
                    <Link to="/register">Belum punya akun?</Link>
                </span>
            </form>
        </div>
    )
}

export default withRouter(LoginPage);