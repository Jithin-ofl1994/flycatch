import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from '../assets/images/logo.jpg'

const Header = () => {
    return(
        <Navbar>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo"/>
                    Flycatch
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;