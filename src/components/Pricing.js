import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const Pricing = () => {
    return (
<PricingContainer>

<section id="pricing" className="pricing section-bg wow fadeInUp">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h3>Qiymətlərimiz</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </header>

        <div className="row flex-items-xs-middle flex-items-xs-center cont">

        
          <div className="col-xs-12 col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card">
              <div className="card-header">
                <h3><span className="currency">$</span>19<span className="period">/month</span></h3>
              </div>
              <div className="card-block">
                <h4 className="card-title">
                  Basic Plan
                </h4>
                <ul className="list-group">
                  <li className="list-group-item">Odio animi voluptates</li>
                  <li className="list-group-item">Inventore quisquam et</li>
                  <li className="list-group-item">Et perspiciatis suscipit</li>
                  <li className="list-group-item">24/7 Support System</li>
                </ul>
                <a href="#" className="btn">Choose Plan</a>
              </div>
            </div>
          </div>

         
          <div className="col-xs-12 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <div className="card-header">
                <h3><span className="currency">$</span>29<span className="period">/month</span></h3>
              </div>
              <div className="card-block">
                <h4 className="card-title">
                  Regular Plan
                </h4>
                <ul className="list-group">
                  <li className="list-group-item">Odio animi voluptates</li>
                  <li className="list-group-item">Inventore quisquam et</li>
                  <li className="list-group-item">Et perspiciatis suscipit</li>
                  <li className="list-group-item">24/7 Support System</li>
                </ul>
                <a href="#" className="btn">Choose Plan</a>
              </div>
            </div>
          </div>

          
          <div className="col-xs-12 col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card">
              <div className="card-header">
                <h3><span className="currency">$</span>39<span className="period">/month</span></h3>
              </div>
              <div className="card-block">
                <h4 className="card-title">
                  Premium Plan
                </h4>
                <ul className="list-group">
                  <li className="list-group-item">Odio animi voluptates</li>
                  <li className="list-group-item">Inventore quisquam et</li>
                  <li className="list-group-item">Et perspiciatis suscipit</li>
                  <li className="list-group-item">24/7 Support System</li>
                </ul>
                <a href="#" className="btn">Choose Plan</a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>

</PricingContainer>




    )
}

export default Pricing;


const PricingContainer = styled.div`
background-color: whitesmoke;
.cont {
    margin-top: 50px;
}
.section-header h3 {
  font-size: 36px;
  color: black;
  text-align: center;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
}
.icon {
  background: #fceef3;
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




#pricing {
  padding: 80px 0;
}

@media (max-width: 991px) {
  #pricing {
    padding-bottom: 30px;
  }
}

#pricing .card {
  border: 0;
  border-radius: 0px;
  box-shadow: 0 3px 0px 0 rgba(65, 62, 102, 0.08);
  transition: all .3s ease-in-out;
  padding: 36px 0;
  position: relative;
}

@media (max-width: 991px) {
  #pricing .card {
    margin-bottom: 50px;
  }
}

#pricing .card:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 5px;
  background-color: #1bb1dc;
  transition: 0.5s;
}

#pricing .card:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.08);
}

#pricing .card:hover:after {
  width: 100%;
}

#pricing .card .card-header {
  background-color: white;
  border-bottom: 0px;
  -moz-text-align-last: center;
  text-align-last: center;
}

#pricing .card .card-title {
  margin-bottom: 16px;
  color: #535074;
}

#pricing .card .card-block {
  padding-top: 0;
  text-align: center;
}

#pricing .card .list-group-item {
  border: 0px;
  padding: 6px;
  color: #413e66;
  font-weight: 300;
}

#pricing .card h3 {
  font-size: 64px;
  margin-bottom: 0px;
  color: #535074;
}

#pricing .card h3 .currency {
  font-size: 30px;
  position: relative;
  font-weight: 400;
  top: -30px;
  letter-spacing: 0px;
}

#pricing .card h3 .period {
  font-size: 16px;
  color: #6c67a3;
  letter-spacing: 0px;
}

#pricing .card .list-group {
  margin-bottom: 15px;
}

#pricing .card .btn {
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  color: #5f5b96;
  border-radius: 0;
  padding: 10px 24px;
  letter-spacing: 1px;
  border-radius: 3px;
  display: inline-block;
  background: #1bb1dc;
  color: #fff;
}

#pricing .card .btn:hover {
  background: #0a98c0;
}


`;


