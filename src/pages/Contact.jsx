import React from 'react'
import BannerBreadcrum from "../components/common/BannerBreadcrum";
import About from '../components/Contact/About';
import Features from '../components/Contact/Features';
import Cta from '../components/Contact/Cta';
import Map from '../components/Contact/Map';
import ContactForm from '../components/Contact/ContactForm';
import AddressCard from '../components/Contact/AddressCard';


const Contact = () => {
  return (
    <div>
       <BannerBreadcrum
        bannerImg="/Banners/homeBanner_3.avif"
        bannerCnt="Contact Us"
      />
      <About/>
      <Features/>
      <ContactForm/>
      <AddressCard/>
      <Map/>
      <Cta/>



    </div>
  )
}

export default Contact
Contact