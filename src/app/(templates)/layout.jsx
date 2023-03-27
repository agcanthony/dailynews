/* eslint-disable react/jsx-no-undef */
'use client'


import { createContext } from "react";
import { Card, Col, Container, ListGroup, Nav, Navbar, Row } from "react-bootstrap";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../assents/css/styles.css';
import Login from "../models/login";


export const MessageCallbackContext = createContext(null);
const MySwal = withReactContent(Swal);

export default function Layout({ children }) {

    const handleMessageCallback = (msg) => {
        if (msg.tipo !== 'nada') {
            let icon = '';
            if (msg.tipo === 'sucesso')
                icon = 'success';
            else if (msg.tipo === 'erro')
                icon = 'error';

            MySwal.fire({
                position: 'center',
                icon: icon,
                title: msg.texto,
                showConfirmButton: false,
                timer: 4000,
                toast: true
            })
        }
    }

    return (
        <>
            <Navbar className="navbar-Principal" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Daily News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Login />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section className='top'>
                <div className='max-width'>
                    <div className='top-content'>
                        <div className='text-1'>
                            <h1>Daily-News</h1>
                        </div>
                        <div className='text-1'>
                            <h1>O Seu Blog de Noticias!</h1>
                        </div>
                    </div>
                </div>
            </section>
            <MessageCallbackContext.Provider value={handleMessageCallback}>
                {children}
            </MessageCallbackContext.Provider>
            <br />
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body className="justify-content-center">
                    <Row>
                        <Col sm={3}>
                            <ListGroup>
                                <ListGroup.Item action href="#link2">
                                    This one is a button
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    This one is a button
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    This one is a button
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    This one is a button
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>

                        <Col sm={3}>
                            <ListGroup>
                                <ListGroup.Item action href="#link2">
                                    This one is a button
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    This one is a button
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    This one is a button
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    This one is a button
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>

                        <Col sm={3}>
                            <ListGroup>
                                <ListGroup.Item action href="#link2">
                                    This one is a button
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    This one is a button
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    This one is a button
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    This one is a button
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}