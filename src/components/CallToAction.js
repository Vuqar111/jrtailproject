import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAccessibleIcon } from "react-icons/fa";
AOS.init();
const CallToAction = () => {
  return (
    <>
      <CalltoActionContainer>
        <section id="call-to-action" className="call-to-action">
          <div className="container" data-aos="zoom-out">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-start">
                <h3 className="cta-title">Bizimlə Əlaqə </h3>
                <p className="cta-text">
                Ətraflı məlumat əldə etmək üçün buton-a klikləyin. 
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="tel: +994502138243">
                Əlaqə 
                </a>
              </div>
            </div>
          </div>
        </section>
      </CalltoActionContainer>
    </>
  );
};

export default CallToAction;

const CalltoActionContainer = styled.div`
  #call-to-action {
    background: #2d2b46;
    background-size: cover;
    padding: 40px 0;
  }

  #call-to-action .cta-title {
    color: #fff;
    font-size: 28px;
    font-weight: 700;
  }

  #call-to-action .cta-text {
    color: #fff;
  }

  @media (min-width: 991px) {
    #call-to-action .cta-btn-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  a {
  text-decoration: none;
}
  #call-to-action .cta-btn {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 8px 26px;
    border-radius: 3px;
    transition: 0.5s;
    margin: 10px;
    border: 3px solid #fff;
    color: #fff;
  }

  #call-to-action .cta-btn:hover {
    background: #1bb1dc;
    border: 3px solid #1bb1dc;
  }
`;
