import React from 'react';
import Carousel from 'react-elastic-carousel'
import img1 from '../assets/img/clients/client-1.png'
import img2 from '../assets/img/clients/client-2.png'
import img3 from '../assets/img/clients/client-3.png'
import img4 from '../assets/img/clients/client-4.png'
import img5 from '../assets/img/clients/client-5.png'
import img6 from '../assets/img/clients/client-6.png'
import img7 from '../assets/img/clients/client-7.png'
import img8 from '../assets/img/clients/client-8.png'
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';


const OwnCarousel = () => {
    return (

<CustomContainer>
      <section id="clients" className="clients">
      <div className="container" data-aos="zoom-in">

        <header className="section-header">
          <h3>Our Clients</h3>
        </header>

        <div className="clients-slider swiper-container">
          <Carousel  itemsToScroll={1}  itemsToShow={4} className="swiper-wrapper align-items-center">

          
              <img src={img1} className="img-fluid" alt="" />
              <img src={img2} className="img-fluid" alt="" />
              <img src={img3} className="img-fluid" alt="" />
              <img src={img4} className="img-fluid" alt="" />
              <img src={img5} className="img-fluid" alt="" />
              <img src={img6} className="img-fluid" alt="" />
              <img src={img7} className="img-fluid" alt="" />
              <img src={img8} className="img-fluid" alt="" />

              <img src={img1} className="img-fluid" alt="" />
              <img src={img2} className="img-fluid" alt="" />
              <img src={img3} className="img-fluid" alt="" />
              <img src={img4} className="img-fluid" alt="" />
              <img src={img5} className="img-fluid" alt="" />
              <img src={img6} className="img-fluid" alt="" />
              <img src={img7} className="img-fluid" alt="" />
              <img src={img8} className="img-fluid" alt="" />


              <img src={img1} className="img-fluid" alt="" />
              <img src={img2} className="img-fluid" alt="" />
              <img src={img3} className="img-fluid" alt="" />
              <img src={img4} className="img-fluid" alt="" />
              <img src={img5} className="img-fluid" alt="" />
              <img src={img6} className="img-fluid" alt="" />
              <img src={img7} className="img-fluid" alt="" />
              <img src={img8} className="img-fluid" alt="" />

              <img src={img1} className="img-fluid" alt="" />
              <img src={img2} className="img-fluid" alt="" />
              <img src={img3} className="img-fluid" alt="" />
              <img src={img4} className="img-fluid" alt="" />
              <img src={img5} className="img-fluid" alt="" />
              <img src={img6} className="img-fluid" alt="" />
              <img src={img7} className="img-fluid" alt="" />
              <img src={img8} className="img-fluid" alt="" />
              

              
              
            
          
            
          </Carousel>
          
        </div>

      </div>
    </section>
</CustomContainer>
    )
}

export default OwnCarousel;


const CustomContainer = styled.div`

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
#clients {
  padding: 60px 0;
}

#clients img {
  opacity: 0.5;
  transition: 0.3s;
  padding: 40px;
}

#clients img:hover {
  opacity: 1;
}

#clients .swiper-pagination {
  margin-top: 20px;
  position: relative;
}





`;