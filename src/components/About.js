import React from "react";
import styled from "styled-components";
import aboutimg from '../assets/img/about-img.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  FaCircle
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <>
      <AboutContainer>
      <section id="about" className="about">

<div className="container" data-aos="fade-up">
  <div className="row">

    <div className="col-lg-5 col-md-6">
      <div className="about-img" data-aos="fade-right" data-aos-delay="100">
        <img src={aboutimg} alt="" />
      </div>
    </div>

    <div className="col-lg-7 col-md-6">
      <div className="about-content" data-aos="fade-left" data-aos-delay="100">
        <h2>Haqqımızda</h2>
        <p>"Kalem Software" şirkəti 1989-cu ildən etibarən ictimai, ticarət və logistika
sektorları üçün ERP həllərini hazırlayır və bu sektorda iki mindən çox layihə
həyata keçirilmishdir</p>
        <p>Hər bir layihənin yeni təhlil üçün bir fürsət olduğunu gördük və müştərinin
komandasını yeni istəklər irəli sürməyə təşviq etdik. Bununla da həllərin qısa
zamanda istifadəçilərə və menecerlərə məxsus olmasına imkan yaradıldı.</p>
        <p>Biz öz müstərilərimizlə yaxin əlaqədə isləyir və onlarin problemlerine tez
bir zamanda hell yolu tapiriq. Bunun nəticəsində sənayenin bütün ümumi
tələbatları və gözləntiləri istifadəçiyə uyğun olaraq , mürəkkəb olmayan ekranlar kimi dizayn edilir. Bu metodla həm müştərinin layihənin məqsədini başa düşməsi, həm də layihəyə töhfəsi asanlaşdırılır. Ən əsası da layihəni almaq istəyən müştəriyə konkret əllə tutulur, gözlə görünür bir məhsulu tanıtmağı hedef etmişdir.</p>
        <ul>
          <li><FaCircle/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li><FaCircle />  Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          <li><FaCircle />  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

</section>
      </AboutContainer>
    </>
  );
};

export default About;

const AboutContainer = styled.div`
  #about {
    padding: 80px 0;
  }

  #about .about-content {
    padding-top: 40px;
  }

  #about .about-content h2 {
    color: #413e66;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
  }

  #about .about-content h3 {
    color: #696592;
    font-weight: 400;
    font-size: 22px;
    font-style: italic;
  }
  a {
  text-decoration: none;
}
  #about .about-content ul {
    list-style: none;
    padding: 0;
    color: black;
  }

  #about .about-content ul li {
    padding-bottom: 10px;
    color: black;
  }

  #about .about-content ul li i {
    font-size: 20px;
    padding-right: 4px;
    color: #1bb1dc;
  }

  #about .about-img {
    position: relative;
    margin: 30px 30px 30px 30px;
  }

  #about .about-img img {
    width: 100%;
    border: 8px solid #fff;
    transition: 0.5s;
  }

  #about .about-img img:hover {
    width: 100%;
    transform: scale(1.03);
  }

  #about .about-img::before {
    position: absolute;
    left: -31px;
    top: -30px;
    width: 90%;
    height: 92%;
    z-index: -1;
    content: "";
    background-color: #ebf1fa;
    transition: 0.5s;
  }

  #about .about-img::after {
    position: absolute;
    right: -31px;
    bottom: -30px;
    width: 90%;
    height: 92%;
    z-index: -1;
    content: "";
    background-color: #ebf1fa;
    transition: 0.5s;
  }
`;
