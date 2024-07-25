import React from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "./common/PrimaryBtn";
import { Reveal } from "../hooks/Reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ServiceCard = ({ img, title, disc, count }) => {
  const isEven = count % 2 === 0;

  return (
    <section className="container mx-auto p-5 md:py-10 px-0 md:p-10 md:px-0">
      <section className="relative px-10 max-sm:p-0 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
        <div
          className={`${isEven ? "w-full flex items-center justify-end" : ""}`}
        >
          <LazyLoadImage className="xl:max-w-3xl" src={img} alt="Service Image" loading="lazy" />
        </div>

        <div
          className={`content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-xl w-full lg:absolute top-[25%] ${
            isEven ? "left-[10%]" : "right-[10%]"
          } lg:border lg:border-[#343333]`}
        >
          <div className="flex justify-between font-bold text-sm">
            <p></p>
            <Reveal>
              <p className="text-gray-400">Our Services</p>
            </Reveal>
          </div>
          <Reveal>
            <h3 className="text-3xl font-semibold mt-4 md:mt-10 max-sm:text-2xl">{title}</h3>
          </Reveal>
          <Reveal>
            <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
              {disc}
            </p>
            <Link to="/">
              <PrimaryBtn fText="Read More" sText="Click Here" />
            </Link>
          </Reveal>
        </div>

        <p
          className={`text-[130px] font-bold text-[#000] absolute top-[-5%] ${
            isEven ? "left-10" : "right-10"
          } opacity-[.3] z-[-1]`}
        >
          0{count}
        </p>
      </section>
    </section>
  );
};

export default ServiceCard;
