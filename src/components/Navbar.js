import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { links, icons } from "./data";
import {FaBars} from "react-icons/fa";
import Scrollspy from 'react-scrollspy'
import ScrollspyNav from "react-scrollspy-nav";
import logo from "../images/jrlogo.png";

const Navbar = () => {
  const [stickynavbar, setstickyNavbar] = useState(false);
  const [hamburger, setHamburger] = useState(false)

  const handleClick = () => {
   setHamburger(!hamburger);
  } 
  const closeMobileMenu = () => setHamburger(false)
  
  window.addEventListener("scroll", changenavbar);

  function changenavbar() {
    if (window.scrollY >= 80) {
      setstickyNavbar(true);
    } else {
      setstickyNavbar(false);
    }
  }

  return (
    <NavContainer>

      
  <header id="header" className={stickynavbar ? 'sticky active fixed-top d-flex align-items-center header-transparent' : 'sticky fixed-top d-flex align-items-center header-transparent'}>
    <div className="container d-flex align-items-center">

      
       
       <a href="index.html" className="logo me-auto"><img src={logo} alt="" className="img-fluid" /></a>

      <nav id="navbar" className={hamburger ? 'navbar-mobile order-last order-lg-0' : 'navbar order-last order-lg-0'}>
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Ana Səhifə</a></li>
          <li><a className="nav-link scrollto" href="#about">Haqqımızda</a></li>
          <li><a className="nav-link scrollto" href="#services">Xidmətlərimiz</a></li>
          <li><a className="nav-link scrollto " href="#pricing">Qiymətlərimiz</a></li>
          <li><a className="nav-link scrollto" href="#footer">Əlaqə</a></li>
   
        </ul>

        
      
   

      <div className={hamburger ? 'social-links active' : 'social-links'}>
        <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" className="facebook"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="linkedin"><i className="fab fa-facebook"></i></a>
        <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
      </div>
      <div>
        <i className={hamburger ? 'fas fa-times mobile-nav-toggle' : 'fas fa-bars mobile-nav-toggle'} onClick={handleClick}></i>
        </div>  
    </nav>
    </div>
  </header>

  
      
    </NavContainer>
  );
};


const NavContainer = styled.nav`
 .sticky {
  background: transparent;
  transition: all 0.5s;
  z-index: 997;
  height: 90px;
}
.sticky.active {
  z-index: 1500;
  background: #fff;
  height: 70px;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.3);
}
#header .logo {
  font-size: 36px;
  margin: 0;
  padding: 0;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
}
#header .logo a {
  color: #413e66;
}
#header .logo img {
  max-height: 40px;
}
#header .social-links {
  margin: 0 0 0 20px;
  display: fixed;
  align-items: center;
  justify-content: center;
}
#header .social-links.active {
  display: none;
}
/*
#header .social-links a {
  color: #1bb1dc;
  transition: 0.3s;
  line-height: 0;
  margin-left: 15px;
}
*/

@media (max-width: 992px) {
  #header .social-links {
    margin: 0 15px 0 0;
  }
}

@media (max-width: 992px) {
  #header .logo {
    font-size: 28px;
  }
}

.navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar a, .navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 24px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: #413e66;
  white-space: nowrap;
  transition: 0.3s;
}

.navbar a i, .navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
  color: #1bb1dc;
}


.social-links.active {
  display: none;
}



@media (max-width: 1366px) {

}

.mobile-nav-toggle {
  color: #413e66;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

.mobile-nav-toggle.fa-times {
  color: #fff;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }
  .navbar ul {
    display: none;
  }

}

.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(45, 43, 70, 0.9);
  transition: 0.3s;
  z-index: 999;
}

.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}

.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}

.navbar-mobile a {
  padding: 10px 20px;
  font-size: 15px;
  color: #413e66;
}

.navbar-mobile a:hover, .navbar-mobile .active, .navbar-mobile li:hover > a {
  color: #1bb1dc;
}

.navbar-mobile .getstarted {
  margin: 15px;
}
`;

export default Navbar;