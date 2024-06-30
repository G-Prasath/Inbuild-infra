import React from "react";
import BannerBreadcrum from "../components/common/BannerBreadcrum";
import Profile from "../components/About/Profile";
import Productivity from "../components/About/Productivity";
import Steps from "../components/About/Steps";
import FunFact from "../components/About/FunFact";
import Gallery from "../components/About/Gallery";

const About = () => {

  return (
   <div>
    <BannerBreadcrum bannerImg="/Banners/homeBanner_3.avif" bannerCnt="About Us" />
    <Profile/>
    <Productivity/>
    <Steps/>
    <FunFact/>
    <Gallery/>
   </div>
  );
};

export default About;
