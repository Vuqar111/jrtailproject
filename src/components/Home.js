import React from "react";
import styled from "styled-components";
import img1 from '../assets/img/introbg.jpg';
import img2 from "../assets/img/intro-img.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Home = () => {
  return (
    <HomeContainer>
     <section id="hero" className="clearfix">
    <div className="container d-flex h-100">
      <div className="row justify-content-center align-self-center" data-aos="fade-up">
        <div className="col-lg-6 intro-info order-lg-first order-last" data-aos="zoom-in" data-aos-delay="100">
          <h2>
          JRetail ilə biznesiniz <br/>
               <span>daha asan</span>
               </h2>
          <div>
            <a href="#about" className="btn-get-started scrollto">Demo</a>
          </div>
        </div>

        <div className="col-lg-6 intro-img order-lg-last order-first" data-aos="zoom-out" data-aos-delay="200">
          <img src={img2} alt="" className="img-fluid" />
        </div>
      </div>

    </div>
  </section>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  #hero {
  width: 100%;
  height: 100vh;
  position: relative;
  background: #f5f8fd url(${img1});
  background-size: cover;
  padding-top: 110px;
}

@media (max-width: 991px) {
  #hero {
    height: auto;
    padding: 100px 0 60px 0;
  }
  #hero .container {
    height: auto !important;
  }
  #hero .intro-img {
    width: 80%;
  }
}

@media (min-width: 992px) {
  #hero .intro-info {
    padding-top: 100px;
  }
}
a {
  text-decoration: none;
}
@media (max-width: 991px) {
  #hero .intro-info {
    text-align: center;
    padding-top: 40px;
  }
}

#hero .intro-info h2 {
  color: #413e66;
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 700;
}

#hero .intro-info h2 span {
  color: #1bb1dc;
}

@media (max-width: 991px) {
  #hero .intro-info h2 {
    font-size: 34px;
    margin-bottom: 30px;
  }
}

#hero .intro-info .btn-get-started, #hero .intro-info .btn-services {
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 32px;
  border-radius: 4px;
  transition: 0.5s;
  color: #fff;
  background: #1bb1dc;
  color: #fff;
}

#hero .intro-info .btn-get-started:hover, #hero .intro-info .btn-services:hover {
  background: #0a98c0;
}
.scrollto {
    text-decoration: none;
}

`;
