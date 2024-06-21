import React from "react";

const Whychoose = () => {
  return (
    <div className="flex flex-col md:flex-row sec-padding">
      <div className="bg-zinc-800 text-white p-6 md:w-1/3" style={{background: 'url(/w-bg.png)', backgroundPosition: 'center', objectFit:'cover'}}>
        <div className="flex flex-col space-y-8 lg:space-y-20">
          <div className="flex items-center space-x-4">
            <div className="bg-teal-500 p-4 rounded-full">
              <img src="https://placehold.co/40x40" alt="icon1" />
            </div>
            <div>
              <p>Section Analysis</p>
              <p className="font-bold">17,835$</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-teal-400 p-4 rounded-full">
              <img src="https://placehold.co/40x40" alt="icon2" />
            </div>
            <div>
              <p>Section Analysis</p>
              <p className="font-bold">17,835$</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-teal-300 p-4 rounded-full">
              <img src="https://placehold.co/40x40" alt="icon3" />
            </div>
            <div>
              <p>Section Analysis</p>
              <p className="font-bold">17,835$</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-purple-500 p-4 rounded-full">
              <img src="https://placehold.co/40x40" alt="icon4" />
            </div>
            <div>
              <p>Section Analysis</p>
              <p className="font-bold">17,835$</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-zinc-800 p-6 md:w-2/3">
        <h2 className="text-2xl font-semibold">
          We Are Creative & Special Team
        </h2>
        <p className="mt-2 text-zinc-600">
          competencies before integrated platforms.
        </p>
        <hr className="my-4" />
        <p className="text-zinc-600">
          Quickly leverage other's distributed internal or “organic” sources
          rather than empowered materials. Conveniently leverage existing
          client-centric solutions with transparent ROI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 lg:">
          <div className="flex items-start space-x-4">
            <img
              src="https://placehold.co/40x40"
              alt="icon5"
              className="mt-1"
            />
            <div>
              <p className="font-bold">Business Essentials</p>
              <p className="text-zinc-600">
                Quickly leverage other's distributed internal or “organic”
                sources.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-lg">
            <img
              src="https://placehold.co/40x40"
              alt="icon6"
              className="mt-1"
            />
            <div>
              <p className="font-bold">Business Essentials</p>
              <p>
                Quickly leverage other's distributed internal or “organic”
                sources.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img
              src="https://placehold.co/40x40"
              alt="icon7"
              className="mt-1"
            />
            <div>
              <p className="font-bold">Business Essentials</p>
              <p className="text-zinc-600">
                Quickly leverage other's distributed internal or “organic”
                sources.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img
              src="https://placehold.co/40x40"
              alt="icon8"
              className="mt-1"
            />
            <div>
              <p className="font-bold">Business Essentials</p>
              <p className="text-zinc-600">
                Quickly leverage other's distributed internal or “organic”
                sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
