import React from 'react'
import BannerBreadcrum from "../components/common/BannerBreadcrum";
import Profile from '../components/Services/Profile'
import Applications from '../components/Services/Applications'
import Benifites from '../components/Services/Benifites'
import DesignProcess from '../components/Services/DesignProcess'
import Testimonials from '../components/Services/Testimonials'
import Faq from '../components/common/Faq'
import ServiceForm from '../components/Services/ServiceForm'
import Gallery from '../components/Services/Gallery';

import { tensileData as allDatas } from '../data/Service';
import { Helmet } from 'react-helmet-async';
import { TensilePageData as metaTags } from '../data/Metatag';
import WhyChoose from '../components/Services/WhyChoose';
import ServiceBannerForm from '../components/Services/ServiceBannerForm';


const Tensile = () => {

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
          <ServiceBannerForm serviceName={allDatas.banner.text}/>
      </div>
      <Profile profileImg={allDatas.profile.img} profileHeading={allDatas.profile.heading} profileText={allDatas.profile.paragraphs} />
      <p className='text-zinc-600 my-2 text-justify sm:leading-[25px] mt-10 sm:px-10 px-5'>Tensile fabric structures need to be periodically inspected in order to find any visible signs of damage, dirt or wear. It is important to make sure they are more lasting and functional. Further, it will be necessary to check each of the components and make sure that all is tightly fixed and in good condition. These equipment hold the structure in shape to ensure it achieves the right inflation at the right time. Regular inspection and testing of this equipment are necessary. Professional cleaning on a regular basis will assist to keep the fabric looking neat and free from as well as structural degradation. Prompt repairs can be carried out onsite to prevent further damage in the case of any minor holes or tears. In cases of major jobs, the replacement sections can be built at our factory hence facilitating the repair process. These basic strategies of maintenance will not only increase the durability of tensile structure but also enhance the look and durability of tensile structure in the future.</p>
      <Applications appData={allDatas.apps} title="Tensile Roofing" />
      <DesignProcess />
      <Benifites benifitesData={allDatas.benefits} title="Tensile Roofing" />
      <WhyChoose datas={allDatas.whychoose} title="Tensile Structure"/>
      <Faq faqData={allDatas.faq} />
      <Gallery galleryImg={allDatas.gallery} />
      <Testimonials testiData={allDatas.testimonials} />
      <ServiceForm title="Tensile Roofings"/>
    </div>
  )
}

export default Tensile
