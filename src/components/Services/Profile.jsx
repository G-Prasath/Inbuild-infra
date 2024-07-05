import React from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../common/PrimaryBtn";

const Profile = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-6/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">

          <header className="px-4 lg:flex mt-10 items-center h-auto lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Find your <span className="text-green-700">greeny</span> stuff
                for your room
              </h1>
              <div className="w-20 h-2 bg-green-700 my-4"></div>
              <p className="text-zinc-600 my-2 text-justify sm:leading-[25px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae maiores neque eaque ea odit placeat, tenetur illum
                distinctio nulla voluptatum a corrupti beatae tempora aperiam
                quia id aliquam possimus aut.
              </p>
              <p className="text-zinc-600 my-2 text-justify sm:leading-[25px] mb-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut laudantium qui quisquam odit quidem minus, consequatur, pariatur eum eos asperiores veniam beatae corrupti, cupiditate expedita aliquid? Magni, eos accusamus nemo voluptates qui ratione ducimus dolorum perferendis est molestiae eveniet consequatur eius dolores obcaecati nobis impedit consectetur dolor delectus deserunt aliquid quod sint atque, quisquam earum. Dolorem, reiciendis, ducimus ullam animi perferendis veritatis consectetur doloremque ab necessitatibus error consequatur! Quo dolores, reiciendis vero iste explicabo eius repellat officia sapiente voluptatum ut praesentium modi obcaecati nemo tenetur ab rem possimus facilis quasi, veritatis dolor ullam assumenda incidunt nobis! Dolorum aut fugiat nobis.
              </p>
              
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
