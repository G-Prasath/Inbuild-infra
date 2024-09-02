import React, { useContext } from "react";
import Breadcrum from "../common/Breadcrum";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../../hooks/ScrollContext";
import ServiceBannerForm from "../Services/ServiceBannerForm";

const BannerBreadcrum = ({ bannerImg, bannerCnt, formService }) => {
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

      <div className="absolute inset-0 flex items-center justify-center ">

        {
          cleanPathname === "about-us" || cleanPathname === "careers" || cleanPathname === "contact-us"
            ? (
              <div className="flex flex-col gap-y-5 max-sm:gap-y-3">
                <p className="sm:text-3xl text-xl md:text-5xl text-white font-bold">{bannerCnt}</p>
                <Breadcrum location={toTitleCase(cleanPathname)} />
              </div>
            )
            : (
              <div className="w-full flex items-center xl:p-10 p-5">

                <div className="w-full flex flex-col items-center gap-y-5 max-sm:gap-y-3">
                  <p className="sm:text-3xl text-xl md:text-5xl text-white font-bold">{bannerCnt}</p>
                  <Breadcrum location={toTitleCase(cleanPathname)} />
                </div>

                <div className="w-1/2 hidden lg:flex items-center justify-center">
                  <ServiceBannerForm serviceName={formService} />
                </div>
              </div>
            )
        }

      </div>
    </div>
  );
};

export default BannerBreadcrum;
