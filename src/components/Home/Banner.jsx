import React, { useContext, useEffect, useState } from "react";
import { ScrollContext } from "../../hooks/ScrollContext";

const Banner = () => {
  const imgList = [
    {
      src: "/Banners/homeBanner_1.avif",
      srcSet: "/Banners/final/homeBanner_1-640.avif 640w, /Banners/final/homeBanner_1-1024.avif 1024w, /Banners/final/homeBanner_1-1280.avif 1280w",
    },
    {
      src: "/Banners/homeBanner_2.avif",
      srcSet: "/Banners/final/homeBanner_2-640.avif 640w, /Banners/final/homeBanner_2-1024.avif 1024w, /Banners/final/homeBanner_2-1280.avif 1280w",
    },
    {
      src: "/Banners/homeBanner_3.avif",
      srcSet: "/Banners/final/homeBanner_3-640.avif 640w, /Banners/final/homeBanner_3-1024.avif 1024w, /Banners/final/homeBanner_3-1280.avif 1280w",
    },
    {
      src: "/Banners/homeBanner_4.avif",
      srcSet: "/Banners/final/homeBanner_4-640.avif 640w, /Banners/final/homeBanner_4-1024.avif 1024w, /Banners/final/homeBanner_4-1280.avif 1280w",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgList.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imgList.length]);

  const { formElement } = useContext(ScrollContext);

  const handleScrollToFooter = () => {
    if (formElement.current) {
      formElement.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative text-white overflow-hidden w-full md:aspect-video aspect-square">
        <div className="absolute inset-0">
          {imgList.map((image, index) => (
            <img
              key={index}
              src={image.src}
              srcSet={image.srcSet}
              sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1280px"
              alt={`Background ${index}`}
              className={`absolute inset-0 object-cover object-center w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="relative w-full z-10 flex justify-center items-center h-full text-center">

          <div className="md:w-1/2 max-sm:hidden w-full h-full flex justify-center items-center"></div>
          <div className="md:w-1/2 w-full h-full md:p-10 p-3 bg-gradient-to-r md:from-black/70 from-black/60 md:to-black/70 to-black/60">

            <div className="flex flex-col md:mt-[30%] mt-0 max-md:justify-center w-full h-full">


              <h2 className="sm:text-4xl text-2xl font-bold uppercase mb-3 tracking-2 text-left">Welcome to <span className="bg-gradient-to-r from-[#e1a938] to-[#ffac03] text-transparent bg-clip-text">Inbuilt infra</span></h2>



              <p className="md:w-[80%] text-justify mb-3 w-full text-[14px] md:text-[18px]">Start constructing your ideal residential and commercial roofing with Inbuilt Infra. We also provide all type of roofing services with unique designs.</p>
              <p className="md:w-[80%] text-justify mb-4 w-full text-[14px] md:text-[18px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos doloribus iste dolores aspernatur, minus ex expedita dolorem libero illo eveniet.</p>

              <div className="flex justify-start items-center md:gap-x-8 gap-x-4">

                <div className="flex items-center justify-center gap-x-2">
                  <img src="/Home/roof.webp" alt="Roofs" className="md:w-[80px] w-[60px]" />
                  <p className="text-[14px]">4500+<br />Project</p>
                </div>

                <div className="flex items-center justify-center gap-x-2">
                  <img src="/Home/high-quality.webp" alt="Roofs" className="md:w-[50px] w-[40px]" />
                  <p className="text-[14px]">4500+<br />Project</p>
                </div>

                <div className="flex items-center justify-center gap-x-2">
                  <img src="/Home/fast-delivery.webp" alt="Roofs" className="md:w-[60px] w-[40px]" />
                  <p className="text-[14px]">4500+<br />Project</p>
                </div>
              </div>
            </div>


          </div>




        </div>
      </div>
    </>
  );
};

export default Banner;
