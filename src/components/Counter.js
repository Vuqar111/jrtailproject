import React from 'react'
import CountUp  from 'react-countup'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Counter () {
  return (

<CounterContainer className="container">
<div className="row counters" data-aos="fade-up" data-aos-delay="100">

  <div className="col-lg-3 col-6 text-center">
  <CountUp end={11} duration={3}  className="purecounter"/>  
  <p>Ölkə</p>
  </div>

  <div className="col-lg-3 col-6 text-center">
  <CountUp end={3000} duration={6}   className="purecounter"/>
    <p>Müştəri</p>
  </div>

  <div className="col-lg-3 col-6 text-center">
  <CountUp end={15} duration={4.5}   className="purecounter"/>
    <p>Növ Məhsul</p>
  </div>

  <div className="col-lg-3 col-6 text-center">
  <CountUp end={10} duration={2.8} className="purecounter"/> 
    <p>Sertifikat</p>
  </div>

</div>

</CounterContainer>
  )
}

export default Counter;


const CounterContainer = styled.div`

 .counters {
  padding-top: 40px;
}
 .counters .purecounter {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 48px;
  display: block;
  color: #555186;
}

.counters p {
  padding: 0;
  margin: 0 0 20px 0;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #8a87b6;
}

`



