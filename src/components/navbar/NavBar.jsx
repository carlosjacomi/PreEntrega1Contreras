import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {Nav,Navbar} from 'react-bootstrap';

import './navbar.css'

import CartWidget from '../CartWidget';


const NavBar = () => {
return (
    <Navbar id='navbar' bg="dark">
        <Container fluid>
            <Navbar.Brand className='fs-4 text-warning fw-bold'><NavLink to={'/'}>Aurus Joyeria</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end fw-bold fs-5">
            <Nav>
                <Navbar.Text className='px-2 fw-light'><NavLink to={'/'}>Home</NavLink></Navbar.Text>
                <Navbar.Text className='px-2 fw-light'><NavLink to={'/category/anillos'}>Anillos</NavLink></Navbar.Text>
                <Navbar.Text className='px-2 fw-light'><NavLink to={'/category/collares'}>Collares</NavLink></Navbar.Text>
                <Navbar.Text className='px-2 fw-light'><NavLink to={'/category/relojes'}>Relojes</NavLink></Navbar.Text>
                <Navbar.Text className='px-2 fw-light'><NavLink to={'/category/joyas-especiales'}>Joyas Especiales</NavLink></Navbar.Text>
                <Navbar.Text className='px-2 fw-light'><CartWidget/></Navbar.Text>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default NavBar;
