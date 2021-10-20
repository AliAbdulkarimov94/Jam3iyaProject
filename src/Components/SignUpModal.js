import React from 'react'
import { useState } from 'react';
import {Button , Modal,Form} from "react-bootstrap"
import authStore from "../stores/authStore";


function SignUpModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user,setUser] = useState({username : "",email :"" ,password : "" })

  const handleChange = (event) => {
    setUser({...user,[event.target.name]: event.target.value });

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    handleClose ();
  };


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        sign up 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control onChange={handleChange} name="username" type="text" placeholder="Enter Username" required/>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={handleChange} name="email" type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
 
  </Form.Group>
  
</Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default SignUpModal
