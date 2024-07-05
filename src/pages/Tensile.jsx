import React from 'react'
import BannerBreadcrum from "../components/common/BannerBreadcrum";
import Profile from '../components/Services/Profile'
import Applications from '../components/Services/Applications'
import Benifites from '../components/Services/Benifites'
import DesignProcess from '../components/Services/DesignProcess'
import Testimonials from '../components/Services/Testimonials'
import Faq from '../components/Services/Faq'
import Form from '../components/Services/Form'
import Gallery from '../components/Services/Gallery';


const Tensile = () => {

  return (
    <div>
      <BannerBreadcrum bannerImg="/Banners/homeBanner_3.avif"
        bannerCnt="Tensile" />
      <Profile />
      <Applications />
      <DesignProcess />
      <Benifites />
      <Faq />
      <Gallery/>
      <Testimonials />
      <Form />
    </div>
  )
}

export default Tensile
