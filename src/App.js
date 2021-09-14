import React, {useEffect, useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import CustomSlider from "./components/CustomSlider";
import Team from "./components/Team";
import WhyUs from "./components/WhyUs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Accordion from './components/Accordion';
import Counter from './components/Counter';
import OwnCarousel from './components/OwnCarousel'
import Pricing from './components/Pricing';
import {FaAngleUp} from "react-icons/fa"; 


function App() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {


    
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
 <div className="appcontainer">
 <Navbar />
<Home />
<About />
<Services />
<WhyUs />
<Counter />
<CallToAction />
<Features />
<OwnCarousel />
<CustomSlider />
<Team />
<Pricing />
<Accordion />
<Footer />
   </div>   


    {showButton && (
          <FaAngleUp id="icon" onClick={scrollToTop} className="back-to-top" />
      )}



    </>
  );
}

export default App;
