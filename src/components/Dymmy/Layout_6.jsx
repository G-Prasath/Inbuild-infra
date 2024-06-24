import React from "react";
import { IoCameraOutline } from "react-icons/io5";
import { GiPodiumWinner } from "react-icons/gi";
import { IoLayersOutline } from "react-icons/io5";
import { Reveal } from "../../hooks/Reveal";

const Layout_6 = () => {
  return (
    <div
      className={`relative w-full grid grid-cols-5 gap-[1px] px-[5%] bg-zinc-100 `}
    >
      <div className="p-10 overflow-hidden w-full h-[300px] border border-white lg:col-span-2 flex flex-col items-start justify-center max-[768px]:col-span-5 max-[991px]:col-span-3">
        <Reveal>
          <p className="text-2xl font-[100] text-zinc-500 lg:w-[500px] leading-[40px]">
            We Are Creative & Special Team competencies before{" "}
            <span className="font-bold">integrated platforms.</span>
          </p>
        </Reveal>

        <hr className="my-4 border-zinc-600 w-20" />
      </div>

      <div className="bg-[#497CA3] overflow-hidden w-full h-[300px] border border-white flex flex-col items-center justify-center lg:p-10 max-[768px]:col-span-5">
        <IoCameraOutline className="text-white text-[40px] mb-3" />
        <p className="font-[600] text-[14px] uppercase mb-1 text-white">
          Photo
        </p>
        <p className="text-[14px] font-sans text-center text-white">
          Quickly leverage other&apos;s distributed internal or “organic”
          sources.
        </p>
      </div>

      <div className="bg-white overflow-hidden w-full h-[300px] border border-white flex flex-col items-center justify-center lg:p-10 max-[768px]:col-span-5">
        <GiPodiumWinner className="text-[40px] mb-3" />
        <p className="font-[600] text-[14px] uppercase mb-1">Photo</p>
        <p className="text-[14px] font-sans text-center">
          Quickly leverage other&apos;s distributed internal or “organic”
          sources.
        </p>
      </div>

      <div className="bg-[#2D3139] overflow-hidden w-full h-[300px] border border-white flex flex-col items-center justify-center lg:p-10 max-[768px]:col-span-5">
        <IoLayersOutline className="text-white text-[40px] mb-3" />
        <p className="font-[600] text-[14px] uppercase mb-1 text-white">
          Photo
        </p>
        <p className="text-[14px] font-sans text-center text-white">
          Quickly leverage other&apos;s distributed internal or “organic”
          sources.
        </p>
      </div>

      <div className="overflow-hidden w-full bg-gray-900 border border-white flex flex-col items-center justify-center col-span-2">
        <img
          src="/L_6/Image_01.png"
          alt=""
          className="w-full h-full hover:scale-[1.1] hover:duration-[.5s] transition-all duration-[.5s]"
        />
      </div>
      <div className="overflow-hidden w-full  bg-gray-900 border border-white flex flex-col items-center justify-center">
        <img
          src="/L_6/Image_02.png"
          alt=""
          className="w-full h-full hover:scale-[1.1] hover:duration-[.5s] transition-all duration-[.5s]"
        />
      </div>
      <div className="overflow-hidden w-full  bg-gray-900 border border-white flex flex-col items-center justify-center">
        <img
          src="/L_6/Image_03.png"
          alt=""
          className="w-full h-full hover:scale-[1.1] hover:duration-[.5s] transition-all duration-[.5s]"
        />
      </div>
      <div className="overflow-hidden w-full bg-gray-900 border border-white flex flex-col items-center justify-center">
        <img
          src="/L_6/Image_04.png"
          alt=""
          className="w-full h-full hover:scale-[1.1] hover:duration-[.5s] transition-all duration-[.5s]"
        />
      </div>
    </div>
  );
};

export default Layout_6;
