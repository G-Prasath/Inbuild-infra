import React from 'react'
import CareerForm from '../components/career/CareerForm'
import Freelancing from '../components/career/Freelancing'
import JobBadges from '../components/career/JobBadges'
import Funfact from '../components/career/Funfact'
import BannerBreadcrum from '../components/common/BannerBreadcrum'



const Careers = () => {
  return (
    <div>
      <BannerBreadcrum 
        bannerImg="/Banners/homeBanner_3.avif"
        bannerCnt="Carrers"
      />
      <Freelancing />
      <Funfact/>
      <CareerForm />
      <JobBadges/>
    </div>
  )
}

export default Careers
