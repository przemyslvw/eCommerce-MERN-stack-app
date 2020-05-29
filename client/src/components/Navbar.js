import React from "react";
import { Link } from 'react-router-dom';
import { logOut } from '../actions/auth';
import { connect } from 'react-redux';

import logo from "../img/logo.png";
import navicon1 from "../img/header/navIcon1.png";
import navicon2 from "../img/header/navIcon2.png";
import navicon3 from "../img/header/navIcon3.png";
import navicon4 from "../img/header/navIcon4.png";
import navicon5 from "../img/header/navIcon5.png";
import navicon6 from "../img/header/navIcon6.png";
import navicon7 from "../img/header/navIcon7.png";
import navicon8 from "../img/header/navIcon8.png";

const Navbar = ({ logOut, auth }) => {
  return (
    <header className="fixed-menu">
      <span className="menu-close">
        <i className="fa fa-times"></i>
      </span>
      <div className="menu-header">
        <div className="logo d-flex justify-content-center">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="nav-wraper">
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                <img src={navicon1} alt="" /> home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">
                <img src={navicon2} alt="" />
                about
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="menu">
                <img src={navicon3} alt="" />
                menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="book-table">
                <img src={navicon4} alt="" />
                Book Table
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">
                <img src={navicon8} alt="" />
                contact
              </a>
            </li>
            <li 
          
            style={{
              display: auth.isAuthenticated ? "none" : "block"
            }}
            
            className="nav-item">
              <a className="nav-link" href="Register">
                <img src={navicon6} alt="" />
                Register
              </a>
            </li>
            <li 
            
            style={{
              display: auth.isAuthenticated ? "none" : "block"
            }}
            
            className="nav-item">
              <a className="nav-link" href="Login">
                <img src={navicon7} alt="" />
                Login
              </a>
            </li>
            <li 
              style={{
                display: auth.isAuthenticated ? "block" : "none"
              }}
              className="nav-item"
            >
              <Link to="/account" className="nav-link">
                  <img src={navicon6} alt="" />
                  Account
              </Link>
            </li>
            <li 
              style={{
                display: auth.isAuthenticated ? "block" : "none"
              }}
              className="nav-item"
            >
              <Link to="/basket" className="nav-link">
                  <img src={navicon3} alt="" />
                  Basket
              </Link>
            </li>
            <li 
            
            style={{
                display: auth.isAuthenticated ? "block" : "none"
            }}
            
            className="nav-item" onClick={() => logOut()}>
              <a className="nav-link">
              <img src={navicon5} alt="" />
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logOut })(Navbar);
