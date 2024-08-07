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
      <div className="relative text-white overflow-hidden w-full aspect-video">
        <div className="absolute inset-0">
          {imgList.map((image, index) => (
            <img
              key={index}
              src={image.src}
              srcSet={image.srcSet}
              sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1280px"
              alt={`Background ${index}`}
              className={`absolute inset-0 object-cover object-center w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h2 className="text-5xl font-bold leading-tight mb-4 max-sm:text-2xl max-sm:mb-1">
            Welcome to Inbuild Infra
          </h2>
          <h3 className="text-lg max-sm:text-sm text-gray-200 mb-8 max-sm:mb-4">
            Roofing Contractor for Residentials & Commercials
          </h3>
          <div className="bg-white text-gray-900 hover:bg-yellow-300 py-2 px-6 max-sm:px-3 rounded-full text-lg max-sm:text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-default" onClick={handleScrollToFooter}>
            Get Quote
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
