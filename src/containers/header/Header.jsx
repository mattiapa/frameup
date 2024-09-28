import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {Logo} from "../../components";
import Nav from "react-bootstrap/Nav";
import './header.css'


const Header = () => {

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#hero"><Logo/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#chi-siamo"> Chi siamo</Nav.Link>
                        <Nav.Link href="#ascolta" className="navbar-links"> Ascolta</Nav.Link>
                        <Nav.Link href="#matrimoni" className="navbar-links"> Matrimoni</Nav.Link>
                        <Nav.Link href="#eventi" className="navbar-links"> Eventi</Nav.Link>
                        <Nav.Link href="#contatti" className="navbar-links"> Contattaci</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header