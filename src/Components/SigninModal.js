import React from 'react'
import { useState } from 'react';
import {Button , Modal,Form} from "react-bootstrap"
import authStore from "../stores/authStore";


function SigninModal () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user,setUser] = useState({
    username : "",
    password : "" })

  const handleChange = (event) => {
    setUser({...user,[event.target.name]: event.target.value });

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
    handleClose ();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        sign in
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control onChange={handleChange} name="username" type="text" placeholder="Enter Username" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
</Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default SigninModal;
