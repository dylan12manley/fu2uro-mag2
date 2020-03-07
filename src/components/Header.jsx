import React from "react";
import { Navbar, Nav}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import header from './../../styles/header.css'

function Header(){
  return (
    <>
    <div id="header">
    <Navbar>
      <Nav className="mr-auto">
      <Link className="companyName" to='/home'>Futuro</Link>
      <Link to='/art' className="navLink" >Art</Link>
      <Link to='/fashion' className="navLink" >Fashion</Link>
      <Link to='/sound' className="navLink" >Sound</Link>
      <Link to='/film' className="navLink" >Film</Link>
      <Link to='/people' className="navLink" >People</Link>
      </Nav>
    </Navbar>
  </div>
  </>
  );
}
export default Header;
