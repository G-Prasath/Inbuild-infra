import React from 'react'

import { Helmet } from 'react-helmet-async';
import { TensileCarParkingData as metaTags } from '../data/Metatag';
import { tensileCarParkingData as allDatas } from '../data/Service';

import BannerBreadcrum from '../components/common/BannerBreadcrum';
import ServiceBannerForm from '../components/Services/ServiceBannerForm';
import Profile from '../components/Services/Profile';
import ServiceForm from '../components/Services/ServiceForm';


const TensileCarParking = () => {
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
                <ServiceBannerForm serviceName={allDatas.banner.text} />
            </div>
            <Profile profileImg={allDatas.profile.img} profileHeading={allDatas.profile.heading} profileText={allDatas.profile.paragraphs} />
            <ServiceForm title="Tensile Car Parking"/>
        </div>
    )
}

export default TensileCarParking
