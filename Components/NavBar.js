import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsCartFill} from 'react-icons/bs'
import{GiShop} from 'react-icons/gi'
import {GiShoppingBag} from 'react-icons/gi';
import {BiLogIn} from 'react-icons/bi';
import { useSelector } from 'react-redux';
const NavBar = () => {
  const cart = useSelector(state=>state.cart.value);

  return (
    <div>

    <Navbar className='navbar-con' expand="lg">
      <Container>
        <Navbar.Brand ><Link href='/'><h3 className='logo-txt flex-row-min'><span>MARKIT</span>
        <GiShop/></h3></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
          <Link href="/" className='nav-linksn'><p className='flex-row-min'><span>Products</span><GiShoppingBag/></p></Link>
          <Link href="/cart" className='nav-linksn'><p className='flex-row-min'><span>Cart({cart.length})</span><BsCartFill/></p>
          </Link>

          {/* <Link href="/login"><p><span>Login</span><BiLogIn/></p>/Link> */}

            <Link href="/login" className='nav-linksn'><p><span>Login</span><BiLogIn/></p></Link>
            {/* <Link href="/contact">Contact</Link> */}
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default NavBar
