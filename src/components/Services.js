import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import { ArrowRight } from 'react-bootstrap-icons';
import { FaAccessibleIcon } from "react-icons/fa";

import {
  FaBox
} from "react-icons/fa";
const Services = () => {
  return (

    <ServicesContainer>
    <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
  
          <header className="section-header">
            <h3>Xidmətlərimiz</h3>
            
            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
          </header>
  
          <div className="row">
  
            <div className="col-md-6 col-lg-4 wow bounceInUp" data-aos="zoom-in" data-aos-delay="100">
              <div className="box">
                <div className="icon" ><FaBox/></div>
                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="box">
                <div className="icon" ><FaBox /></div>
                <h4 className="title"><a href="">Dolor Sitema</a></h4>
                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="box">
                <div className="icon" ><FaBox /></div>
                <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow" data-aos="zoom-in" data-aos-delay="100">
              <div className="box">
                <div className="icon" ><FaBox />
                </div>
                <h4 className="title"><a href="">Magni Dolores</a></h4>
                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
          <div className=" box">
              <div className="icon" ><FaBox /></div>
              <h4 className="title"><a href="">Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="box">
              <div className="icon" ><FaBox /></div>
              <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
              <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>
  
        </div>
  
        </div>
      </section>
    

      </ServicesContainer>
  )
}

export default Services;

const ServicesContainer = styled.div`


padding: 15px;
margin-top: 35px;

.section-header h3 {
  font-size: 36px;
  color: black;
  text-align: center;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
}
.icon {
  background: #fceef3;
  font-size: 20px;
}
.section-header p {
  text-align: center;
  margin: auto;
  font-size: 15px;
  color: #535074;
  width: 50%;
}
a {
  text-decoration: none;
}
@media (max-width: 767px) {
  .section-header p {
    width: 100%;
  }
}


#services {
    margin-top: 10px;
    background-color: #fff;
    height: auto;
    padding: 60px 0 40px 0;
  }
  
  #services .box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    position: relative;
    border-radius: 10px;
    margin: 0 10px 40px 10px;
    background: #fff;
    box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
    transition: all 0.3s ease-in-out;
    text-align: center;
  }
  .box p {
    color: black;
  }
  #services .box:hover {
    transform: scale(1.1);
  }
  .row {
    margin-top: 20px;
  }
  
  #services .icon {
    margin: 0 auto 15px auto;
    padding-top: 12px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
  
  #services .icon i {
    font-size: 36px;
    line-height: 0;
  }
  
  #services .title {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 18px;
  }
  
  #services .title a {
    color: #111;
  }
  
  #services .box:hover .title a {
    color: #1bb1dc;
  }
  
  #services .description {
    font-size: 14px;
    line-height: 28px;
    margin-bottom: 0;
    text-align: left;
  }
`;





