import React from 'react'
import BannerBreadcrum from "../components/common/BannerBreadcrum";
import About from '../components/Contact/About';
import Features from '../components/Contact/Features';
import FormAdd from '../components/Contact/FormAdd';
import Cta from '../components/Contact/Cta';


const Contact = () => {
  return (
    <div>
       <BannerBreadcrum
        bannerImg="/Banners/homeBanner_3.avif"
        bannerCnt="Contact Us"
      />
      <About/>
      <Features/>


      <FormAdd/>
      <Cta/>



    </div>
  )
}

export default Contact
Contact