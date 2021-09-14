import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import login from '../assets/img/login.png'
import {FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram

} from "react-icons/fa";

AOS.init();


const Footer  = () => {
return (
    <>

    <FooterContainer>

    <footer id="footer" className="section-bg">
    <div className="footer-top">
      <div className="container">

        <div className="row">

          <div className="col-lg-6">

            <div className="row">

              <div className="col-sm-6">

                <div className="footer-info">
                <img src={login} alt="" width="250px" height="250px" className="img-fluid" />
                  
                </div>
                

                <div className="footer-newsletter">
                <h4> Bizim Fürsətlərimiz </h4>
                  <p> Yeniliklər və fürsətlərdən xəbərdar olmaq üçün e-poçt ünvanınızı əlavə edin.</p>

                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </div>

              </div>

              <div className="col-sm-6">
                <div className="footer-links">
                  <h4> Keçidlər</h4>
                  <ul>
                    <li><a href="#">Ana Səhifə</a></li>
                    <li><a href="#about">Haqqımızda</a></li>
                    <li><a href="#">Qiymətlərimiz</a></li>
                    <li><a href="#">Niyə biz?</a></li>
                    <li><a href="#">FAQ</a></li>
                  </ul>
                </div>

                <div className="footer-links">
                  <h4>Bizimlə Əlaqə</h4>
                  <p>
                  Həydar Əliyev Pros. <br/>  
                  105-N B. 97 M.5 <br/>
                    
                  Telefon:  +994 55 213 82 43 
                  Email:  help@kalemyazilim.az
                  </p>
                </div>

                <div className="social-links">
                  <a href="#" className="twitter"><FaTwitter/></a>
                  <a href="#" className="facebook"><FaFacebook/></a>
                  <a href="#" className="instagram"><FaInstagram /></a>
                  <a href="#" className="linkedin"><FaLinkedin/></a>
                </div>

              </div>

            </div>

          </div>

          <div className="col-lg-6">

            <div className="form">

              <h4>Bizimlə Əlaqə</h4>
              <p> Sizinlə əlaqənin yaradılması üçün aşağıdakı formu doldurun. </p>
              
                <div className="form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group mt-3">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="text-center"><button type="submit" title="Send Message">Göndər</button></div>
            

            </div>

          </div>

        </div>

      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>Rapid</strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>

    </FooterContainer>

    </>
)
}

export default Footer;


const FooterContainer = styled.div`
#footer {
  padding: 0 0 30px 0;
  font-size: 14px;
  background: #fff;
}

#footer .footer-top {
  padding: 60px 0 30px 0;
  background: #f5f8fd;
}

#footer .footer-top .footer-info {
  margin-bottom: 30px;
}

#footer .footer-top .footer-info h3 {
  font-size: 34px;
  margin: 0 0 20px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-family: "Montserrat", sans-serif;
  color: #413e66;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
}

#footer .footer-top .footer-info p {
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Montserrat", sans-serif;
  color: #535074;
}

#footer .footer-top .social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #1bb1dc;
  color: #fff;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .footer-top .social-links a i {
  line-height: 0;
  font-size: 16px;
}

#footer .footer-top .social-links a:hover {
  background: #0a98c0;
  color: #fff;
}

@media (max-width: 574px) {
  #footer .footer-top .social-links a {
    margin-bottom: 25px;
  }
}

#footer .footer-top h4 {
  font-size: 14px;
  font-weight: bold;
  color: #413e66;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 10px;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul li {
  padding: 8px 0;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

#footer .footer-top .footer-links ul a {
  color: #696592;
}

#footer .footer-top .footer-links ul a:hover {
  color: #1bb1dc;
}

#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}

#footer .footer-top .footer-contact p {
  line-height: 26px;
}

#footer .footer-top .footer-newsletter {
  margin-bottom: 30px;
}

#footer .footer-top .footer-newsletter input[type="email"] {
  border: 0;
  padding: 6px 8px;
  width: 65%;
  border: 1px solid #d9dde6;
}

#footer .footer-top .footer-newsletter input[type="submit"] {
  background: #1bb1dc;
  border: 1px solid #1bb1dc;
  width: 35%;
  padding: 6px 0;
  text-align: center;
  color: #fff;
  transition: 0.3s;
  cursor: pointer;
}

#footer .footer-top .footer-newsletter input[type="submit"]:hover {
  background: #0a98c0;
}
a {
  text-decoration: none;
}
#footer  .validate {

  color: red;
  margin: 0 0 15px 0;
  font-weight: 400;
  font-size: 13px;
}



#footer .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

#footer  input, #footer .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  border: 1px solid #dce1ec;
  font-size: 14px;
}

#footer  input:focus, #footer .php-email-form textarea:focus {
  border-color: #1bb1dc;
}

#footer  input {
  padding: 10px 15px;
}

#footer  textarea {
  padding: 12px 15px;
}

#footer  button[type="submit"] {
  background: #1bb1dc;
  border: 0;
  border-radius: 3px;
  padding: 8px 30px;
  color: #fff;
  transition: 0.3s;
  margin-top: 15px;
}

#footer  button[type="submit"]:hover {
  background: #0a98c0;
  cursor: pointer;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#footer .copyright {
  text-align: center;
  padding-top: 30px;
  color: #535074;
  font-size: 15px;
}

#footer .credits {
  text-align: center;
  font-size: 14px;
  padding-top: 4px;
  color: #8582a8;
}

#footer .credits a {
  color: #1bb1dc;
}

#footer .credits a:hover {
  color: #0a98c0;
}



`;