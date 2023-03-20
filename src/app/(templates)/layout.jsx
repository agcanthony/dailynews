'use client'

import { createContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../assents/css/styles.css';

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
            <Navbar fixed="top" bg="transparent" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Daily News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                                                        
                        </Nav>
                        <Nav>                            
                            <Nav.Link eventKey={2} href="#memes">
                            Área Exclusiva
                            </Nav.Link>
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

        </>
    )
}