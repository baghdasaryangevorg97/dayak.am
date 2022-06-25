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
      .then(response=>{
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
    <div id="signUp">
     <MenuHeader />

      <section className="h-100 ">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid" style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                  </div>
                  <div className="col-xl-6">
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer*/}
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
      {/* Portfolio Modals*/}
      {/* Portfolio item 1 modal popup*/}
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Threads
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Illustration
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio item 2 modal popup*/}
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Explore
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Graphic Design
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio item 3 modal popup*/}
      <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Finish
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Identity
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio item 4 modal popup*/}
      <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Lines
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Branding
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio item 5 modal popup*/}
      <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Southwest
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Website Design
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio item 6 modal popup*/}
      <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Window
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Photography
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp

