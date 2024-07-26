import React from "react";
import BannerBreadcrum from "../components/common/BannerBreadcrum";
import Profile from "../components/About/Profile";
import Productivity from "../components/About/Productivity";
import Steps from "../components/About/Steps";
import FunFact from "../components/About/FunFact";
import Gallery from "../components/About/Gallery";
import HappyCustomer from "../components/About/HappyCustomer";
import WhyChoose from "../components/About/WhyChoose";
import Manufacturing from "../components/About/Manufacturing";
import OurBranches from "../components/About/OurBranches";
import OurFeatureGoal from "../components/About/OurFeatureGoal";
import { Helmet } from "react-helmet-async";
import { AboutPageData as metaTags } from '../data/Metatag';

// import TimeLine from "../components/About/TimeLine";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>
      <BannerBreadcrum
        bannerImg="/Banners/homeBanner_3.avif"
        bannerCnt="About Us"
      />
      <Profile />
      <Productivity />
      <Steps />
      <WhyChoose />
      <Manufacturing />
      <OurFeatureGoal/>

      <FunFact />
      <OurBranches />
      
      {/* <TimeLine/> */}

      <Gallery />

      <HappyCustomer />
    </div>
  );
};

export default About;
