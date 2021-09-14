import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/img/testimonial-1.jpg';
import img2 from '../assets/img/testimonial-2.jpg';
import img3 from '../assets/img/testimonial-3.jpg';
import img4 from '../assets/img/testimonial-4.jpg';
const OwnCarousel = () => {
  return (
    <OwnContainer className="testimonials">
      <header className="section-header">
        <h3>Testimonials</h3>
      </header>


      <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">

      
      <Carousel itemsToShow={1}  >


        <div className="swiper-slide">
          <div className="testimonial-item">
            <img
              src={img1}
              className="testimonial-img"
              alt=""
            />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            <p>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
            </p>
          </div>
        </div>




        <div className="swiper-slide">
          <div className="testimonial-item">
            <img
              src={img2}
              className="testimonial-img"
              alt=""
            />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            <p>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
            </p>
          </div>
        </div>



        <div className="swiper-slide">
          <div className="testimonial-item">
            <img
              src={img3}
              className="testimonial-img"
              alt=""
            />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            <p>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
            </p>
          </div>
        </div>





        <div className="swiper-slide">
          <div className="testimonial-item">
            <img
              src={img4}
              className="testimonial-img"
              alt=""
            />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            <p>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
            </p>
          </div>
        </div>






        <div className="swiper-slide">
          <div className="testimonial-item">
            <img
              src={img2}
              className="testimonial-img"
              alt=""
            />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            <p>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
            </p>
          </div>
        </div>





        <div className="swiper-slide">
          <div className="testimonial-item">
            <img
              src={img3}
              className="testimonial-img"
              alt=""
            />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            <p>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
            </p>
          </div>
        </div>



        
      </Carousel>
      </div>
      </div>
      </div>
      </div>
    </OwnContainer>
  );
};
export default OwnCarousel;

const OwnContainer = styled.div`


  padding: 60px 0;

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
.section-header {
  margin-bottom: 40px;
}

@media (max-width: 767px) {
   .testimonial-item {
    text-align: center;
  }
}

 .testimonial-item .testimonial-img {
  width: 120px;
  border-radius: 50%;
  border: 4px solid #fff;
  float: left;
}

@media (max-width: 767px) {
   .testimonial-item .testimonial-img {
    float: none;
    margin: auto;
  }
}

 .testimonial-item h3 {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0 5px 0;
  color: #111;
  margin-left: 140px;
}

 .testimonial-item h4 {
  font-size: 14px;
  color: #999;
  margin: 0 0 15px 0;
  margin-left: 140px;
}
 .testimonial-item p {
  font-style: italic;
  margin: 0 0 15px 140px;
}

@media (min-width: 992px) {
   .testimonial-item p {
    width: 80%;
  }
}

@media (max-width: 767px) {
   .testimonial-item h3,  .testimonial-item h4,  .testimonial-item p {
    margin-left: 0;
  }
}






`;
