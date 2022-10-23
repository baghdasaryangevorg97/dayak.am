import React, { useState } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { API_BASE_URL, getAxiosConfig } from '../config';
import { useEffect } from 'react';
import { getUserData, setUsers } from '../redux/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';

const UserEdit = (props) => {
    // const {userInfo} = props
    const [show, setShow] = useState(false);
    // const [dataNow, setDataNow] = useState({})
    const [editData, setEditData] = useState({})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    const userInfo = useSelector(getUserData)
    const dispatch = useDispatch();
    const [file, setFile] = useState()


    function changePhoto(event) {
        setFile(event.target.files[0])
    }

    function submitPhoto(event) {
        event.preventDefault()
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        formData.append('userId', userInfo.id);
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };
        console.log(formData);
        axios.post(API_BASE_URL + '/api/uploadPhoto', formData, config)
        .then((response) => {
          console.log(response.data);
        });
    
      }

    // useEffect(()=>{
    //     setDataNow(userInfo)
    // }, [userInfo])

    const profileEdit = () => {
        let data = {};
        data.editData = editData;
        axios.post(API_BASE_URL + '/api/userEdit', data, getAxiosConfig())
        .then(
            response => { 
                setShow(false)
                dispatch(setUsers(response.data))
            })
        .catch(error => {
        })
    }

    const editValue = e => {
        setEditData({...editData,  [e.target.name]: e.target.value })
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}
             <button type="button" onClick={handleShow} className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{ zIndex: 1 }}>
                Edit Profile
             </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit my info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={profileEdit}>
                        <Form.Group className="mb-3" controlId="ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name='name'
                                type="text"
                                defaultValue={userInfo.name}
                                autoFocus
                                onChange={e=>editValue(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ControlInput2">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control
                                name='surname'
                                type="text"
                                onChange={e=>editValue(e)}
                                defaultValue={userInfo.surname}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ControlInput3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name='email'
                                type="email"
                                defaultValue={userInfo.email}
                                onChange={e=>editValue(e)}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ControlInput4">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                name='age'
                                type="text"
                                defaultValue={userInfo.age}
                                onChange={e=>editValue(e)}
                            />
                        </Form.Group>
                    </Form>
                    <form>
                        <h5>Upload photo</h5>
                        <input type="file" onChange={changePhoto} />
                        <button type="submit" onClick={submitPhoto}>Upload</button>
                    </form>
                </Modal.Body>   
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='button' variant="primary" onClick={()=>profileEdit()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
export default UserEdit;