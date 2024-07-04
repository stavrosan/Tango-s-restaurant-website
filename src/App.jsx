import React, {useState,useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[])

  return(
    <div className="overflow-x-hidden">
    <>
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </>
    </div>
  );
  
};

export default App;
