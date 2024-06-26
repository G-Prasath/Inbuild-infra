import React from "react";
import { FaChessKing } from "react-icons/fa";
import { Reveal } from "../../hooks/Reveal";
import { Faq } from "../../data/Home";

const Layout_11 = () => {
  return (
    <div className="py-4 bg-white">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div className="text-center">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            F.A.Q
          </p>
          <p className="text-2xl sm:text-4xl leading-normal font-[600] tracking-tight text-gray-900">
            Frequently Asked Questions
          </p>
        </div>

        <div className="mt-20">
          <ul className="">
            {Faq.map((item, index) => (
              <li className="text-left mb-10" key={index}>
                <div className="flex flex-row items-start mb-5">
                  <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      width="30px"
                      fill="white"
                      height="30px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g data-name="Layer 2">
                        <g data-name="menu-arrow">
                          <rect
                            width="24"
                            height="24"
                            transform="rotate(180 12 12)"
                            opacity="0"
                          ></rect>
                          <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                          <circle cx="12" cy="19" r="1"></circle>
                        </g>
                      </g>
                    </svg>
                  </div>

                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <Reveal>
                      <h4 className="text-md leading-6 font-medium text-gray-900">
                       {item.question}
                      </h4>
                    </Reveal>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
                    <Reveal>
                      <p className="text-gray-700 text-sm">
                       {item.answer}
                      </p>
                    </Reveal>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <FaChessKing className="text-[25px]" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout_11;
