import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { API_BASE_URL, AxiosConfigs } from "../config";
import { getCookie, setCookie } from "../cookie";
import { useCookies, cookies } from 'react-cookie';
import MenuHeader from "./MenuHeader";
import { Redirect, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context";
import { useSelector } from "react-redux";
import { getUserData } from "../redux/reducers/userReducer";


// import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router';



const Signin = function () {
    const { isAuthAdmin, setIsAuthAdmin, isAuth, setIsAuth } = useContext(AuthContext)
    // const navigate = useNavigate()
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const [errorMessage, setErrorMessage] = useState([])
    const [cookies, setCookie] = useCookies(['Name']);
    let history = useHistory();
    // const goUserpage = () => navigate('/userPage', {replace: true})  

    const getSigninValue = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const getData = e => {
        e.preventDefault()
        let data = {};
        data.remember = true
        data = values
        console.log(data);
        axios.post(API_BASE_URL + '/api/signinForm', data, AxiosConfigs)
            .then(
                response => {
                    const token = response.data.access_token;
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('authUser', token);
                    setIsAuth(true)
                  
                    history.push('/userPage') 
                })
            .catch(error => {
                console.log(error.response.data.error);
                setErrorMessage(error.response.data.error)
            })

    }

    return (
        <div id="signin">
            <MenuHeader setIsAuth={setIsAuth}/>
            <section className="vh-100">
                <div className="container-fluid sig-pd h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                {/* Email input */}
                                <div className="form-outline mb-4">
                                    <p className="mb-0">{errorMessage && errorMessage.hasOwnProperty('both') ? <p className="Authmessage Autherror"> {errorMessage.both} </p> : null}</p>
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                    <input type="email" name="email" value={values.email} onChange={getSigninValue} className="form-control form-control-lg" />
                                    <p className="mb-0">{errorMessage && errorMessage.hasOwnProperty('email') ? <p className="Authmessage Autherror"> {errorMessage.email} </p> : null}</p>
                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-3">
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                    <input type="password" name="password" value={values.password} onChange={getSigninValue} className="form-control form-control-lg" />
                                    <p className="mb-0">{errorMessage && errorMessage.hasOwnProperty('password') ? <p className="Authmessage Autherror"> {errorMessage.password} </p> : null}</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    {/* Checkbox */}
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button onClick={getData} type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
);
}   
export default Signin;