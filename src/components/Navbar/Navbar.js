import { Link } from 'react-router-dom';
import List from '../../assets/svg/list.svg'

import './Navbar.css'

import { useState } from 'react';
import { Button, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
        </div>
    )
}

function OffCanvasNavbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='navbar'>
            <Button variant="primary" onClick={handleShow}>
                <img src={List} alt="" />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    Menu
                </Offcanvas.Header>
                <Offcanvas.Body>
                    
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
export default OffCanvasNavbar;
export default Navbar;

/*
    <Link to="/About">About</Link>
    <Link to="/Projects">Projects</Link>
    <Link to="/Skills">Skills</Link>
    <Link to="/Experience">Experience</Link>
    <Link to="/Testimonials">Testimonials</Link>
    <Link to="/Footer">Footer</Link>

    <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#about">About</NavDropdown.Item>
                    <NavDropdown.Item href="#education">Education</NavDropdown.Item>
                    <NavDropdown.Item href="#skills">Skills</NavDropdown.Item>
                    <NavDropdown.Item href="#experience">Experience</NavDropdown.Item>
                    <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
                    <NavDropdown.Item href="#achievements">Achievements</NavDropdown.Item>
                    <NavDropdown.Item href="#testimonials">Testimonials</NavDropdown.Item>
                </NavDropdown>

*/