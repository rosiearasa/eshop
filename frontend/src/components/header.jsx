
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";


import React from "react";


export const Header = () => {
  const {cartItems} = useSelector((state) => state.cart)
  console.log(cartItems)

  return (
  
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
         
          <Link to ='/'>
          <Navbar.Brand >
             
             <img src={logo} alt="Proshop" />
             Pro Shop
           </Navbar.Brand>
          </Link>
       

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

           
              <Link    to="/cart">
                <FaShoppingCart />
                Cart
                {
                  cartItems.length >0&&(
                    <Badge pill bg='success' style={{marginLeft:'5px'}}>
                      {cartItems.reduce((a, c) => a +c.qty, 0)}
                    </Badge>
                  )
                }
              </Link>
        
              <Link to="/login">
                <FaUser />
                Sign In
              </Link>
        

          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
