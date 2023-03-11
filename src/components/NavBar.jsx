import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from './CartWidget';


const NavBar = () => {
return (
    <Navbar bg="light">
    <Container fluid>
        <Navbar.Brand href="#home" className='fs-4 text-warning fw-bold'>Aurus Joyeria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end fw-bold fs-5">
        <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#anillos"><NavLink to={'/category/anillos'}>Anillos</NavLink></Nav.Link>
            <Nav.Link href="#collares">Collares</Nav.Link>
            <Nav.Link href="#relojes">Relojes</Nav.Link>
            <Nav.Link href="#especiales">Joyas Especiales</Nav.Link>
            <Nav.Link className='mx-3' href='#!'>
                <CartWidget/>
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default NavBar;
