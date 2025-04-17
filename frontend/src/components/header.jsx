
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

import { useLogoutMutation } from "../slices/usersApiSlice";
import {logout} from '../slices/authSlice'


import React from "react";



export const Header = () => {
  const {cartItems} = useSelector((state) => state.cart)
  const {userInfo} = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async ()=>{
    try {
     await logoutApiCall().unwrap()
     dispatch(logout())
     navigate('/login')
    } catch (error) {
      console.log(error)
      
    }
  }


  return (
  
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
         
          <Link style={{ textDecoration: 'none' }} to ='/'>
          <Navbar.Brand >
             
             <img src={logo} alt="Proshop" />
             Pro Shop
           </Navbar.Brand>
          </Link>
       

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

           
              <Link style={{ textDecoration: 'none' }}   to="/cart">
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
        {userInfo ? (<NavDropdown title={userInfo.name} id="username"> 
          <Link style={{ textDecoration: 'none' }} to ='/profile'>
       
          <NavDropdown.Item>Profile</NavDropdown.Item>
          </Link>
          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

        </NavDropdown>) :  (      <Link style={{ textDecoration: 'none' }} to="/login">
                <FaUser />
                Sign In
              </Link>)}
        
        

          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
