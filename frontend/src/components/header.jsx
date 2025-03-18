import { LinkContainer } from "react-router-bootstrap";
import {Link} from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";


import React from "react";


export const Header = () => {
  return (
  
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          {/* <LinkContainer to='/'> */}
          <Link to ='/'>
          <Navbar.Brand >
             
             <img src={logo} alt="Proshop" />
             Pro Shop
           </Navbar.Brand>
          </Link>
           
          {/* </LinkContainer> */}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {/* <LinkContainer to="/cart"> */}
              <Link   to="/cart">
                <FaShoppingCart />
                Cart
              </Link>
            {/* </LinkContainer> */}

            {/* <LinkContainer to="/login"> */}
              <Link to="/login">
                <FaUser />
                Sign In
              </Link>
            {/* </LinkContainer> */}

          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
