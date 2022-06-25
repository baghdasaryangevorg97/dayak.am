import React from "react";
import { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
const UserPage = function () {
  // const [values, setValues] = useState({
  //     email: '',
  //     password: '',
  // })

  // const getSigninValue = e => {
  //     const { name, value } = e.target;
  //     setValues({
  //         ...values,
  //         [name]: value
  //     })
  // }

  // const getData = e => {
  //     let data = {};
  //     data = values
  //     axios.post('http://localhost:8000/api/signinForm', data)
  //     .then(
  //         response => {
  //             console.log(response);
  //         })
  //      .catch({})

  // }

  //   $(document).ready(function () {
  //     $('#sidebarCollapse').on('click', function () {
  //         $('#sidebar').toggleClass('active');
  //     });
  // });


  return (
    <div id="userPage" className="d-flex">
      <div className="wrapper">
<Sidebar />
        <div id="content">
          <section className="h-100 w-100 gradient-custom-2">
            <div className=" h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                {/* <div className="col col-lg-9 col-xl-7"> */}
                <div className="">
                  <div className="card">
                    <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                      <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2" style={{ width: '150px', zIndex: 1 }} />
                        <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{ zIndex: 1 }}>
                          Edit profile
                        </button>
                      </div>
                      <div className="ms-3" style={{ marginTop: '130px' }}>
                        <h5>Andy Horwitz</h5>
                        <p>New York</p>
                      </div>
                    </div>
                    <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                      <div className="d-flex justify-content-end text-center py-1">
                        <div>
                          <p className="mb-1 h5">253</p>
                          <p className="small text-muted mb-0">Photos</p>
                        </div>
                        <div className="px-3">
                          <p className="mb-1 h5">1026</p>
                          <p className="small text-muted mb-0">Followers</p>
                        </div>
                        <div>
                          <p className="mb-1 h5">478</p>
                          <p className="small text-muted mb-0">Following</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-4 text-black">
                      <div className="mb-5">
                        <p className="lead fw-normal mb-1">About</p>
                        <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                          <p className="font-italic mb-1">Web Developer</p>
                        </div>
                      </div>
                      <div className="mb-5">
                        <p className="lead fw-normal mb-1">Work Experiance</p>
                        <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                          <p className="font-italic mb-1">Web Developer</p>
                        </div>
                      </div>
                      <div className="mb-5">
                        <p className="lead fw-normal mb-1">Education</p>
                        <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                          <p className="font-italic mb-1">Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>






    </div>
  );

}
export default UserPage;