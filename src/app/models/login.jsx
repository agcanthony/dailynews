/* eslint-disable react/jsx-no-undef */
'use client'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../assents/css/styles.css';
import Input from './input';

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Área Exclusiva
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end" style={{ backgroundColor: '#100A80' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: '#fff' }}>Login</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ color: '#fff' }}>          
          <Input />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Login;