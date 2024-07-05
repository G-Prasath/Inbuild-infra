import React from "react";
import { FaChessKing } from "react-icons/fa";
import { Reveal } from "../../hooks/Reveal";
import { faqData } from "../../data/Home";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const Faq = () => {
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
            {faqData.map((item, index) => (
              <li className="text-left mb-10" key={index}>
                <div className="flex flex-row items-start mb-5">
                  <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                   <BsFillQuestionCircleFill className="text-[25px]"/>
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

export default Faq;
