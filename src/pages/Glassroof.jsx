import React from 'react'
import Benifites from '../components/Services/Benifites'
import DesignProcess from '../components/Services/DesignProcess'
import Testimonials from '../components/Services/Testimonials'
import Faq from '../components/common/Faq'
import ServiceForm from '../components/Services/ServiceForm'
import Gallery from '../components/Services/Gallery';
import BannerBreadcrum from '../components/common/BannerBreadcrum'
import Profile from '../components/Services/Profile'
import Applications from '../components/Services/Applications'
import WhyChoose from '../components/Services/WhyChoose'

import { glassroofData as allDatas } from '../data/Service';
import { Helmet } from 'react-helmet-async'
import { GalssroofPageData as metaTags } from '../data/Metatag';


const Glassroof = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>
      <BannerBreadcrum bannerCnt={allDatas.banner.text} bannerImg={allDatas.banner.img} />
      <Profile profileImg={allDatas.profile.img} profileHeading={allDatas.profile.heading} profileText={allDatas.profile.paragraphs} />
      <Applications appData={allDatas.apps} title="Glass Roofing" />
      <DesignProcess />
      <Benifites benifitesData={allDatas.benefits} title="Glass Roofing" />
      <WhyChoose datas={allDatas.whychoose} title="Glass Roofing" />
      <Faq faqData={allDatas.faq} />
      <Gallery galleryImg={allDatas.gallery} />
      <Testimonials testiData={allDatas.testimonials} />
      <ServiceForm/>
    </div>
  )
}

export default Glassroof
