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
import Brands from "../components/Home/Brands"
import Blog from "../components/Home/Blog";



const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Brands/>
      <Whychoose/>
      <Services/>
      <Features/>
      <Gallery/>
      <Blog/>
      <Faq/>
      <Form/>
      <Cta/>
    </div>
  );
};

export default Home;
