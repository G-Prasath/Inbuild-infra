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

import { mangloreData as allDatas } from '../data/Service';
import { Helmet } from 'react-helmet-async';
import { MangalorePageData as metaTags } from '../data/Metatag';
import ServiceBannerForm from '../components/Services/ServiceBannerForm'


const Manglore = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>
      <BannerBreadcrum bannerCnt={allDatas.banner.text} bannerImg={allDatas.banner.img} formService={allDatas.banner.text} />
      <div className="lg:hidden block">
          <ServiceBannerForm/>
      </div>
      <Profile profileImg={allDatas.profile.img} profileHeading={allDatas.profile.heading} profileText={allDatas.profile.paragraphs} />
      <Applications appData={allDatas.apps} title="Mangalore Tile Roofing" />
      <DesignProcess />
      <Benifites benifitesData={allDatas.benefits} title="Mangalore Tile Roofing" />
      <WhyChoose datas={allDatas.whychoose} title="Mangalore Tile Roofing" />
      <Faq faqData={allDatas.faq} />
      <Gallery galleryImg={allDatas.gallery} />
      <Testimonials testiData={allDatas.testimonials} />
      <ServiceForm title="Mangalore Tile Roofing" />
    </div>
  )
}

export default Manglore
