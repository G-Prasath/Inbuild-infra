import React from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../common/PrimaryBtn";
import { Reveal } from "../../hooks/Reveal";

const Profile = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-6/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">

          <header className="px-4 lg:flex mt-10 items-center h-auto lg:mt-0">
            <div className="w-full">
              <Reveal>
              <h1 className="text-4xl lg:text-5xl font-bold text-zinc-800">
               Tensile Roofing Structures
              </h1>
              </Reveal>
              <Reveal>
              <div className="w-20 h-1 bg-zinc-800 my-4"></div>
              <p className="text-zinc-600 my-2 text-justify sm:leading-[25px]">
                Inbuilt Infra is the leading provider of tensile roofing in Chennai. We expertise in tensile structures and fabric roofs. We create stunning tensile membrane structures using high quality architectural fabric.
              </p>
              </Reveal>
              <Reveal>
              <p className="text-zinc-600 my-2 text-justify sm:leading-[25px] mb-10">
                Our structural roofing services include designing and installing the tensile canopies, shade structures and lightweight structures that integrate seamlessly into modern architecture. Our form-found structures are crafted using high-tensile strength fabrics and fire-retardant fabrics that ensure safety and durability. We work with high-quality materials like ETFE and PTFE. Our structure design was inspired by Frei Otto, who is known as the father of tensile structure. Inbuilt Infra’s tensile roofing service includes car parking shed, stadium roofs, event venues, airports, sport complexes, public spaces, shopping centers, temporary structures, pool enclosures and front of commercial buildings. Tensile roof is a cable-supported roof delivering a unique aesthetic look for outdoors. Our quick installation processes are complemented by detailed tensile stress analysis and advanced form finding techniques. We have a management team with expertise in supervision and guidance, which encourages a culture of team building.
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
        src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt="Leafs"
        className="w-full h-48 object-cover sm:h-screen sm:w-6/12"
      />
    </div>
  );
};

export default Profile;
