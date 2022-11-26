import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { API_BASE_URL, AxiosConfigs, getAxiosConfig } from "../config";
import { useDispatch, useSelector } from 'react-redux';
import { getGeneralUserInfo, getUserData, getUserGeneralData, setUsers } from "../redux/reducers/userReducer";
import UserMenu from "./UserMenu";
import UserEdit from "./UserEdit";
import PhotoLoader from "../../src/assets/img/photoLoader.gif";
import EditPhoto from "./EditPhoto";


const UserPage = function () {
  const [dataNow, setDataNow] = useState({})
  const dispatch = useDispatch( )
  const userInfo = useSelector(getUserData)
  const [user, setUser] = useState({})
const genData = useSelector(getUserGeneralData)
  useEffect(()=>{
    setUser(userInfo);
  }, [userInfo])

  useEffect(()=>{
    dispatch(getGeneralUserInfo())
  }, [])
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

  

  useEffect(() => {
		// var data = {};
		// data.id = localStorage.getItem('authUser');
		axios.post(API_BASE_URL + '/api/getMe', null, getAxiosConfig())
			.then(response => {
        dispatch(setUsers(response.data))
        dispatch(getGeneralUserInfo())

				// setMyInfo(response.data)
			})
			.catch(error => {
				console.log(error);
			})
	}, []);

  //   $(document).ready(function () {
  //     $('#sidebarCollapse').on('click', function () {
  //         $('#sidebar').toggleClass('active');
  //     });
  // });


  return (
    <>      
    <UserMenu />
    <div id="userPage" className="d-flex">
      <div className="wrapper">
        <div id="content">
          <section className="h-100 w-100 gradient-custom-2">
            <div className=" h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="">
                  <div className="card">
                    <div className="rounded-top text-white d-flex flex-row " style={{ backgroundColor: '#000', height: '200px' }}>
                      <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                        <div>
                          <img key={userInfo.photo} src={userInfo.photo?API_BASE_URL +'/images/' + userInfo.photo:PhotoLoader} className="img-fluid img-thumbnail mt-4 mb-2"  style={{ width: '150px', height: '160px' }} />
                        </div>
                        <EditPhoto />
                        <UserEdit userInfo={userInfo} />
                      </div>
                      <div className="ms-3 user-data-show" style={{ marginTop: '130px' }}>
                        <h5 >{userInfo.name}</h5>
                        <p >{userInfo.email}</p>
                      </div>
                    </div>
                    {/* <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
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
                    </div> */}
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
</>
  );

}
export default UserPage;