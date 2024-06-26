import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 p-8 bg-white">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">BePro.</h1>
            <p className="text-zinc-500">Business Special Template</p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">
              We Are Creative & Special Team
            </h2>
            <p className="text-zinc-700">
              competencies before integrated platforms.
            </p>
            <hr className="my-4 border-zinc-300" />
            <p className="text-zinc-600">
              Quickly leverage other's distributed internal or "organic" sources
              rather than empowered materials. Conveniently leverage existing
              client-centric solutions with transparent ROI.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-zinc-800">about us.</h3>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/about.png"
            alt="Building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
