import React, { useContext } from "react";
import Breadcrum from "../common/Breadcrum";
import { useLocation } from "react-router-dom";
import Secbtn from "./Secbtn";
import { ScrollContext } from "../../hooks/ScrollContext";

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

  const { formElement } = useContext(ScrollContext);

  const handleScrollToFooter = () => {
    if (formElement.current) {
      formElement.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="relative h-full max-md:aspect-video w-full">
      <img
        src={bannerImg}
        alt="Background Image"
        className="object-cover object-center w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-5 max-sm:gap-y-3">
        <p className="sm:text-3xl text-xl md:text-5xl text-white font-bold">{bannerCnt}</p>
        <Breadcrum location={toTitleCase(cleanPathname)} />
        {
          cleanPathname === "about-us" || cleanPathname === "careers" || cleanPathname === "contact-us"
            ? null
            : (
              <div onClick={handleScrollToFooter}>
                <Secbtn fText="Get In" sText="Quote" />
              </div>
            )
        }

      </div>
    </div>
  );
};

export default BannerBreadcrum;
