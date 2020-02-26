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
      <span class="menu-close">
        <i class="fa fa-times"></i>
      </span>
      <div class="menu-header">
        <div class="logo d-flex justify-content-center">
          <img src={logo} alt="" />
        </div>
      </div>
      <div class="nav-wraper">
        <div class="navbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="index.html">
                <img src={navicon1} alt="" /> home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about-us.html">
                <img src={navicon2} alt="" />
                about
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="menu.html">
                <img src={navicon3} alt="" />
                menu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="book-table.html">
                <img src={navicon4} alt="" />
                Book Table
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Chefs.html">
                <img src={navicon5} alt="" />
                Chefs
              </a>
            </li>
            <li class="nav-item submenu dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={navicon6} alt="" />
                Pages
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a class="nav-link" href="elements.html">
                    element
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item submenu dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={navicon7} alt="" />
                Blog
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a class="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="single-blog.html">
                    Blog Details
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">
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
