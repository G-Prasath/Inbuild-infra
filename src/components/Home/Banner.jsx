import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      img: "/banner-1.jpg",
      title: "Be.Pro",
      description: "Intrinsically optimize orthogonal core competencies before integrated platforms."
    },
    {
      img: "/banner-2.jpg",
      title: "Innovate",
      description: "Seamlessly engineer open-source web-readiness via ubiquitous platforms."
    },
    {
      img: "/banner-3.jpg",
      title: "Achieve",
      description: "Proactively transform cross-unit manufactured products via plug-and-play networks."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="w-full h-full absolute z-[9] flex items-center justify-center text-center text-white bg-black bg-opacity-50">
        <div>
          <h1 className="text-4xl font-bold">{slides[currentIndex].title}</h1>
          <p className="mt-2 text-lg">{slides[currentIndex].description}</p>
        </div>
      </div>
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.img} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
