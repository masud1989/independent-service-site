import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo1 from './../../../images/logo.png';

const Header = () => {
    return (
        // ----
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="info" >
        <Container>

        <Navbar.Brand as={Link} to="/"><img height={30} src={logo1} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"> 
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="home#services">Trainings</Nav.Link>
            <Nav.Link href="home#experts">My Students</Nav.Link>
            <Nav.Link href="home#experts">My Trainees</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            {/* {
              user?
                <button onClick={handleLogout} className="btn btn-primary text-danger">Logout</button>
              :
                <Nav.Link as={Link} to="login">Login</Nav.Link>
            } */}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>    
      );
};

export default Header;


// https://github.com/programming-hero-web-course-4/independent-service-provider-masud1989