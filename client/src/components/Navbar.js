import React from "react";

import logo from "../img/logo.png";
import navicon1 from "../img/header/navIcon1.png";
import navicon2 from "../img/header/navIcon2.png";
import navicon3 from "../img/header/navIcon3.png";
import navicon4 from "../img/header/navIcon4.png";
import navicon5 from "../img/header/navIcon5.png";
import navicon6 from "../img/header/navIcon6.png";
import navicon7 from "../img/header/navIcon7.png";
import navicon8 from "../img/header/navIcon8.png";

const Navbar = () => {
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
              <a className="nav-link" href="about-us">
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
              <a className="nav-link" href="Chefs">
                <img src={navicon5} alt="" />
                Chefs
              </a>
            </li>
            <li className="nav-item submenu dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={navicon6} alt="" />
                Pages
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a className="nav-link" href="elements">
                    element
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item submenu dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={navicon7} alt="" />
                Blog
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a className="nav-link" href="blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="single-blog">
                    Blog Details
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">
                <img src={navicon8} alt="" />
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
