import React from "react";
import Breadcrum from "../common/Breadcrum";
import { useLocation } from "react-router-dom";

const BannerBreadcrum = ({ bannerImg, bannerCnt }) => {
  const location = useLocation();

  // Remove leading slash from pathname
  const cleanPathname = location.pathname.startsWith("/")
    ? location.pathname.substring(1)
    : location.pathname;

  const toTitleCase = (str) => {
    return str
      .split("/")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  };


  return (
    <div className="relative h-full max-md:aspect-video w-full">
      <img
        src={bannerImg}
        alt="Background Image"
        className="object-cover object-center w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-5 max-sm:gap-y-3">
        <p className="text-5xl text-white font-bold">{bannerCnt}</p>
        <Breadcrum location={toTitleCase(cleanPathname)} />
      </div>
    </div>
  );
};

export default BannerBreadcrum;
