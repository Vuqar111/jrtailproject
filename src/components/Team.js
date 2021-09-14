import React from 'react';
import styled from 'styled-components';
import team1 from '../assets/img/team-1.jpg';
import team2 from '../assets/img/team-2.jpg';
import team3 from '../assets/img/team-3.jpg';
import team4 from '../assets/img/team-4.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '@material-ui/core/Icon';
import { FaAccessibleIcon } from "react-icons/fa";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram

} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();



const Team = () => {

    return (
<>
<TeamContaainer>


<div id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3>Team</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
              <img src={team1} className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div className="social">
                  <a href="#" className="twitter"><FaTwitter/></a>
                  <a href="#" className="facebook"><FaFacebook/></a>
                  <a href="#" className="instagram"><FaInstagram /></a>
                  <a href="#" className="linkedin"><FaLinkedin/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="member">
              <img src={team2} className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <div className="social">
                  <a href="#" className="twitter"><FaTwitter/></a>
                  <a href="#" className="facebook"><FaFacebook/></a>
                  <a href="#" className="instagram"><FaInstagram /></a>
                  <a href="#" className="linkedin"><FaLinkedin/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="member">
              <img src={team3} className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <div className="social">
                  <a href="#" className="twitter"><FaTwitter/></a>
                  <a href="#" className="facebook"><FaFacebook/></a>
                  <a href="#" className="instagram"><FaInstagram /></a>
                  <a href="#" className="linkedin"><FaLinkedin/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="member">
              <img src={team4} className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <div className="social">
                  <a href="#" className="twitter"><FaTwitter/></a>
                  <a href="#" className="facebook"><FaFacebook/></a>
                  <a href="#" className="instagram"><FaInstagram /></a>
                  <a href="#" className="linkedin"><FaLinkedin/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

</TeamContaainer>


</>

    )
}
export default Team;


const TeamContaainer = styled.div`

#team {
  padding: 60px 0;
}

#team .member {
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}
a {
  text-decoration: none;
}
#team .member .member-info {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 0.2s;
  padding: 15px 0;
  background: rgba(29, 28, 41, 0.6);
}

#team .member .member-info-content {
  transition: margin 0.2s;
  height: 36px;
  transition: height 0.4s;
}

#team .member:hover .member-info {
  transition: 0.4s;
}

#team .member:hover .member-info-content {
  height: 70px;
}

#team .member h4 {
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 18px;
  color: #fff;
}

#team .member span {
  font-style: italic;
  display: block;
  font-size: 13px;
  color: #fff;
}

#team .member .social a {
  transition: none;
  color: #fff;
  margin-left: 5px;
}

#team .member .social a:hover {
  color: #1bb1dc;
}

#team .member .social  {
  font-size: 18px;
  margin: 0 2px;
}
.section-header h3 {
  font-size: 36px;
  color: #413e66;
  text-align: center;
  font-weight: 700;
  position: relative;
  font-family: "Montserrat", sans-serif;
}

.section-header p {
  text-align: center;
  margin: auto;
  font-size: 15px;
  padding-bottom: 60px;
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

`