import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  const imgList = ["/Banners/homeBanner_1.avif", "/Banners/homeBanner_2.avif", "/Banners/homeBanner_3.avif", "/Banners/homeBanner_4.avif"  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgList.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imgList.length]);

  return (
    <div className="relative text-white overflow-hidden w-full aspect-video">
      <div className="absolute inset-0">
        {imgList.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Background ${index}`}
            className={`absolute inset-0 object-cover object-center w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'} loading="lazy"`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4 max-sm:text-2xl max-sm:mb-1">Welcome to Inbuild Infra</h1>
        <p className="text-lg max-sm:text-sm text-gray-200 mb-8 max-sm:mb-4">Discover amazing features and services that await you.</p>
        <Link
          href="/"
          className="bg-white text-gray-900 hover:bg-yellow-300 py-2 px-6 max-sm:px-3 rounded-full text-lg max-sm:text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Banner;
