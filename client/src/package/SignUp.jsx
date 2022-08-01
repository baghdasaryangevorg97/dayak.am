import React from "react";
import { useState, useRef } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config";
import MenuHeader from "./MenuHeader";


const SignUp = function () {
  const [values, setValues] = useState({
    name: '',
    surName: '',
    email: '',
    password: '',
    password2: '',
    type: '',
    gender: '',
    age: '',
  })

  const formConfig = useRef();
  const [errorMessage, setErrorMessage] = useState([])

  const ResetAllForm = function () {

    formConfig.current.reset()
    setValues({
      name: '',
      surName: '',
      email: '',
      password: '',
      password2: '',
      type: '',
      gender: '',
      age: '',
    })
  }


  const signupFormData = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  const getResgistrationData = e => {
    // if(values.password === values.password2){
    let data = {};
    data = values;
    axios.post(API_BASE_URL + '/api/signup', data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        setErrorMessage(error.response.data.error)
      })
    // }
    //  else {
    //   //  showmessageError()
    //    console.log("wrong password confirm");
    //  }

  }

  return (

    <div id="signin">
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form ref={formConfig}>
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5 text-uppercase">Registration</h3>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1m">Name</label>
                        <input type="text" id="form3Example1m" name="name" value={values.name} onChange={signupFormData} className="form-control form-control-lg" />
                        <p className="mb-0">{errorMessage && errorMessage.hasOwnProperty('name') ? <p className="Authmessage Autherror"> {errorMessage.name} </p> : null}</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1n">Surname</label>
                        <input type="text" id="form3Example1n" name="surName" value={values.surName} onChange={signupFormData} className="form-control form-control-lg" />
                        <p className="mb-0">{errorMessage && errorMessage.hasOwnProperty('surName') ? <p className="Authmessage Autherror"> {errorMessage.surName} </p> : null}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1m1">Type</label>
                        <select className="form-select select-type" name="type" value={values.type} onChange={signupFormData}   >
                          <option value={0}></option>
                          <option value={1}>Employee</option>
                          <option value={2}>Employer</option>
                        </select>
                        <p className="mb-0">{errorMessage && errorMessage.hasOwnProperty('type') ? <p className="Authmessage Autherror"> {errorMessage.type} </p> : null}</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1n">Age</label>
                        <input type="number" id="form3Example1n" name="age" value={values.age} onChange={signupFormData} className="form-control form-control-lg" />
                        <p className="mb-0">{errorMessage && errorMessage.hasOwnProperty('age') ? <p className="Authmessage Autherror"> {errorMessage.age} </p> : null}</p>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form3Example1m1">Gender</label>
                      <select className="form-select select-type" name="gender" value={values.gender} onChange={signupFormData} >
                        <option value={0}></option>
                        <option value={1}>Male</option>
                        <option value={2}>Female</option>
                      </select>
                      <p className="mb-0">{errorMessage && errorMessage.hasOwnProperty('gender') ? <p className="Authmessage Autherror"> {errorMessage.gender} </p> : null}</p>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example8">Email</label>
                    <input type="email" id="form3Example8" name="email" value={values.email} onChange={signupFormData} className="form-control form-control-lg" />
                    <p className="mb-0">{errorMessage && errorMessage.hasOwnProperty('email') ? <p className="Authmessage Autherror"> {errorMessage.email} </p> : null}</p>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1m1">Password</label>
                        <input id="form3Example1m1" type="password" name="password" value={values.password} onChange={signupFormData} className="form-control form-control-lg" />
                        <p className="mb-0">{errorMessage && errorMessage.hasOwnProperty('password') ? <p className="Authmessage Autherror"> {errorMessage.password} </p> : null}</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="confirmPassword">Confirm Password </label>
                        <input className="form-control form-control-lg" name="password2" value={values.password2} onChange={signupFormData} type="password" id="confirmPassword" />
                        <p className="mb-0">{errorMessage && errorMessage.hasOwnProperty('password2') ? <p className="Authmessage Autherror"> {errorMessage.password2} </p> : null}</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end pt-3">
                    <button type="button" className="btn btn-light btn-lg" onClick={ResetAllForm}>Reset all</button>
                    <button type="button" className="btn btn-warning btn-lg ms-2" onClick={getResgistrationData}>Submit form</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">Copyright © Your Website 2022</div>
            <div className="col-lg-4 my-3 my-lg-0">
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
              <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default SignUp






