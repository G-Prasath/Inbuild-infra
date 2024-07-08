import React from "react";
import { Reveal } from "../../hooks/Reveal";

const OurFeatureGoal = () => {
  return (
    <div className="bg-indigo-800 dark:bg-gray-800 py-16 mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl sm:text-center mb-14">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Feature Goals
          </p>

          <p className="mt-2 text-lg leading-8 text-gray-300">
          Our focus is to lead the roofing industry with forward-thinking approaches that innovate and inspire.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </svg>
              Step 1
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-500/80 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></div>
            </div>
            <Reveal>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-wide text-white">
              Unique Roofing Styles:
              </p>
              <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">
                The Rise of Unique Roofing Styles with innovative roofing solutions.
              </p>
            </Reveal>
          </div>
          <div>
            <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </svg>
              Step 2
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-500/80 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></div>
            </div>
            <Reveal>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-wide text-white">
              Advanced Roof Coatings:
              </p>
              <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">
              Advanced roofing coatings will improve durability of the roofing sheets.
              </p>
            </Reveal>
          </div>
          <div>
            <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </svg>
              Step 3
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-500/80 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></div>
            </div>
            <Reveal>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-wide text-white">
              3D Printing:
              </p>
              <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">
              3D Printing for Custom Roofing Solutions for accuracy of the project.
              </p>
            </Reveal>
          </div>
          <div>
            <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </svg>
              Step 4
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-500/80 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></div>
            </div>
            <Reveal>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-wide text-white">
              Digital Design Tools:
              </p>
              <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">
                We use advanced digital designing tools to improve the roofing plans.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatureGoal;
