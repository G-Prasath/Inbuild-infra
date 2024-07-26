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
import { Helmet } from "react-helmet-async";
import { HomePageData as metaTags } from '../data/Metatag';




const Home = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>
      <Banner />
      <About />
      <Brands />
      <Whychoose />
      <Services />
      <Features />
      <Gallery />
      <Blog />
      <Faq />
      <Form />
      <Cta />
    </div>
  );
};

export default Home;
