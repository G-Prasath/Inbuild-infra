import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import PrimaryBtn from "../common/PrimaryBtn";
import { Reveal } from "../../hooks/Reveal";
import { tensileAppData } from "../../data/Service";

const Applications = () => {
  return (
    <div className="w-full py-[5%] px-[5%]">
      <p className="w-full text-center text-4xl text-zinc-800 font-bold my-10">
        Applications
      </p>
      <div className="container w-full grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {tensileAppData.map((item, index) => (

          <div className="w-full rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500">
            <div className="overflow-hidden">
              <img
                src={item.appImg}
                alt="Laptop"
                className="h-[300px] w-full rounded-t-md object-cover hover:scale-[1.1] hover:duration-[.5s] transition-all"
              />
            </div>
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.appTitle} &nbsp;
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
              </h1>
              <p className="mb-5 mt-3 text-sm text-gray-500 dark:text-gray-400 text-justify leading-6">
                {item.appPara}
              </p>

              <Link to="/">
                <PrimaryBtn fText="Get In" sText="Quote" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
