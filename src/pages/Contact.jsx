import React from 'react'
import BannerBreadcrum from "../components/common/BannerBreadcrum";
import About from '../components/Contact/About';
import Features from '../components/Contact/Features';
import Cta from '../components/Contact/Cta';
import Map from '../components/Contact/Map';
import ContactForm from '../components/Contact/ContactForm';
import AddressCard from '../components/Contact/AddressCard';
import { ContactusPageData as metaTags } from '../data/Metatag';
import { Helmet } from 'react-helmet-async';


const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>

      <BannerBreadcrum
        bannerImg="/contactBanner.avif"
        bannerCnt="Contact Us"
      />
      <About />
      <Features />
      <ContactForm />
      <AddressCard />
      <Map />
      <Cta />



    </div>
  )
}

export default Contact
Contact