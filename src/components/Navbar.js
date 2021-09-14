import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { links, icons } from "./data";
import {FaBars} from "react-icons/fa";
import Scrollspy from 'react-scrollspy'
import ScrollspyNav from "react-scrollspy-nav";
import logo from "../images/jrlogo.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [showlink, setshowlink] = useState(false);
  window.addEventListener("scroll", changenavbar);

  function changenavbar() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  return (
    <NavContainer>
      <header id="" className={navbar ? "header active" : "header"}>
        <div className="container d-flex align-items-center">
          <nav id="navbar" className="navbar order-last order-lg-0">
            <div className="nav-center">
              <div className="nav-header">
                <img src={logo} className="logo" alt="logo" />
                <button
                  className="nav-toggle"
                  onClick={() => setshowlink(!showlink)}
                >
                  <FaBars />
                </button>
              </div>

              <div
                className={`${
                  showlink
                    ? "links-container show-container"
                    : "links-container"
                }`}
              >
            


                <ul className="links">
                
                 <ScrollspyNav scrollTargetIds={['about','services','pricing','footer']}
                 scrollDuration="50"
                  activeNavClass="menuactive"
                 >
                   
<span className="firstclass">


               
                   <li>
                       
                        <a href="/">Ana Səhifə</a>
                        
                      </li>
                      <li>
                       
                       <a href="#about">Haqqımızda</a>
                       
                     </li>
                     <li>
                       
                       <a href="#services">Xidmətlərimiz</a>
                       
                     </li>
                     <li>
                       
                       <a href="#pricing">Qiymətlərimiz</a>
                       
                     </li>
                     <li>
                       
                       <a href="#footer">Əlaqə</a>
                       
                     </li>
                     </span>
                     </ScrollspyNav>
                 

                  <span className="iconspan">
                    {icons.map((icon) => {
                      const { id, url, text } = icon;
                      return (
                        <li key={id}>
                          <a href={url}>{text}</a>
                        </li>
                      );
                    })}
                  </span>
                </ul>
                
              </div>
            </div>
          </nav>
        </div>
      </header>
    </NavContainer>
  );
};


const NavContainer = styled.nav`
  .header {
    width: 100%;
    display: flex;
    position: fixed;
    top: 0;
    align-items: center;
    transition: all 0.5s;
    z-index: 997;
    height: auto !important;
    /* background: #fff; */
  }
  .header img {
    max-width: 40px;
    min-width: 40px;
    width: 100%;
    background-size: cover;
  }

  .img-style {
    width: 55px;
    height: 55px;
  }

  .header.active {
    background: #fff;
    height: auto !important;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.3);
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
.menuactive  {
  color: red;
}

.firstclass {
  display: flex;
  flex-direction: row;
}
@media screen and (max-width: 756px){
  .firstclass {
    display: flex;
    flex-direction: column;
  }
}
  .iconspan {
    display: flex;
    flex-direction: row;
  }
  @media screen and (min-width: 800px) {
  }
  /*  global classes */

   
  /* section */
  .section {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: var(--clr-primary-5);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }
  .icons {
    display: none;
  }
  .logo {
    height: 40px;
  }
  .links a {
    color: var(--clr-grey-3);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    display: block;
    padding: 0.8rem 1rem;
    transition: var(--transition);
  }
  .links a:hover {
    color: var(--clr-primary-5);
  }
  .social-icons {
    display: none;
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }
  .show-container {
    background: #fff;
    height: 15rem;
  }
  @media screen and (min-width: 800px) {
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
      margin-top: 10px;
    }
    
    .links a {
      padding: 0px;
      margin: 0 0.5rem;
    }
    .links a:hover {
      background: transparent;
    }
    .icons {
      display: flex;
    }
    .icons a {
      margin: 0 0.5rem;
      color: var(--clr-primary-5);
      transition: var(--transition);
    }
    .icons a:hover {
      color: var(--clr-primary-7);
    }
  }
`;

export default Navbar;
