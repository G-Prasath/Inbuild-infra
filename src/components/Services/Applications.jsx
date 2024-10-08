import React, { useContext } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import PrimaryBtn from "../common/PrimaryBtn";
import { Reveal } from "../../hooks/Reveal";
import { ScrollContext } from "../../hooks/ScrollContext";

const Applications = ({ appData, title }) => {
  const { formElement } = useContext(ScrollContext);

  const handleScrollToFooter = () => {
    if (formElement.current) {
      formElement.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full py-[5%] px-[5%]">
      <h2 className="w-full text-center md:text-4xl text-2xl text-zinc-800 font-bold my-10">
        {title} Applications
      </h2>
      <div className="container w-full grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {appData.map((item, index) => (
          <div
            className="w-full rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500"
            key={index}
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt="Laptop"
                className="h-[300px] w-full rounded-t-md object-cover hover:scale-[1.1] hover:duration-[.5s] transition-all"
              />
            </div>
            <div className="p-4">
              <h3 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                <Reveal>
                  {item.title} &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Reveal>
              </h3>
              <Reveal>
                <p className="mb-5 mt-3 text-sm text-gray-500 dark:text-gray-400 text-justify leading-6">
                  {item.para}
                </p>
              </Reveal>
              {
                item.url
                  ? <PrimaryBtn fText="Read" sText="More" url={item.url} />
                  : <div onClick={handleScrollToFooter}>
                    <PrimaryBtn fText="Read" sText="More"/>
                  </div>
              }

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
