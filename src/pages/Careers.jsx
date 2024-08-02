import React from 'react'
import CareerForm from '../components/career/CareerForm'
import Freelancing from '../components/career/Freelancing'
import JobBadges from '../components/career/JobBadges'
import Funfact from '../components/career/Funfact'
import BannerBreadcrum from '../components/common/BannerBreadcrum'
import { CareerPageData as metaTags } from '../data/Metatag';
import { Helmet } from 'react-helmet-async'




const Careers = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>

      <BannerBreadcrum
        bannerImg="/careerBanner.avif"
        bannerCnt="Carrers"
      />
      <Freelancing />
      <Funfact />
      <CareerForm />
      <JobBadges />
    </div>
  )
}

export default Careers
