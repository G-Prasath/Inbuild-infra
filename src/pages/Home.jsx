import React from "react";
import Banner from "../components/Home/Banner";
import About from "../components/Home/About";
import Cta from "../components/Home/Cta";
import Faq from "../components/Home/Faq";
import Features from "../components/Home/Features";
import Services from "../components/Home/Services";
import Gallery from "../components/Home/Gallery";
import Whychoose from "../components/Home/Whychoose";
import Form from "../components/Home/Form"



const Home = () => {
  return (
    <div className="bg-clr">
      <Banner />
       <About />
      <Features/>
      {/* <Services/>
      <Gallery/>
      <Faq/>
      <Whychoose/>
      <Cta/>
      <Form/>    */}
    </div>
  );
};

export default Home;
