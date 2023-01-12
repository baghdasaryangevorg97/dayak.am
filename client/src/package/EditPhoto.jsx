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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    const userInfo = useSelector(getUserData)
    const dispatch = useDispatch();
    const [file, setFile] = useState()


    function changePhoto(event) {
        setFile(event.target.files[0])
    }

    const editPhoto = (event) => {
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
        axios.post(API_BASE_URL + '/api/uploadPhoto', formData, config)
        .then((response) => {
            setShow(false)
            dispatch(setUsers(response.data))
        });
    }

    return (
        <>
             <button type="button" onClick={handleShow} className="btn btn-outline-dark mb-2" data-mdb-ripple-color="dark" style={{ zIndex: 1 }}>
                Edit Photo
             </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <input type="file" onChange={changePhoto} />
                </Modal.Body>   
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='button' variant="primary" onClick={(event)=>editPhoto(event)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
export default UserEdit;