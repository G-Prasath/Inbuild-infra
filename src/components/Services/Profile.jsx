import React from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../common/PrimaryBtn";
import { Reveal } from "../../hooks/Reveal";

const Profile = ({profileImg, profileText, profileHeading}) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-6/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">

          <header className="px-4 lg:flex mt-10 items-center h-auto lg:mt-0">
            <div className="w-full">
              <Reveal>
              <h1 className="text-4xl lg:text-5xl font-bold text-zinc-800">
               {profileHeading}
              </h1>
              </Reveal>
              <Reveal>
              <div className="w-20 h-1 bg-zinc-800 my-4"></div>
              <p className="text-zinc-600 my-2 text-justify sm:leading-[25px]">
                {profileText[0]}
              </p>
              </Reveal>
              <Reveal>
              <p className="text-zinc-600 my-2 text-justify sm:leading-[25px] mb-10">
                {profileText[1]}
              </p>
              </Reveal>
              
              <Link to="/">
                <PrimaryBtn fText="Visit" sText="Our Project"/>
              </Link>
                
            </div>
          </header>
        </div>
      </div>
      <img
        src={profileImg}
        alt="Leafs"
        className="w-full h-48 object-cover sm:h-screen sm:w-6/12"
      />
    </div>
  );
};

export default Profile;
