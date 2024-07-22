import React from 'react'
import BannerBreadcrum from '../components/common/BannerBreadcrum'
import Gallery from '../components/Projects/Gallery';


const Projects = () => {

  const images = [
    "https://images.unsplash.com/photo-1721011564875-a2c115a8204e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1720986073399-f5c24e020ca1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1676188114945-efdc6d290dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1721300374215-d7bc50deb64f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1670793629760-e6432f5a9213?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1619551964399-dad708b59b8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvcml6b250YWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D",
    


  ];

  return (
    <div>
      <BannerBreadcrum
        bannerImg="/Banners/homeBanner_3.avif"
        bannerCnt="Projects"
      />

      <Gallery title="Our Completing Projects" images={images}/>

      <Gallery title="Our Ongoing Projects" images={images}/>



    </div>
  )
}

export default Projects
Projects