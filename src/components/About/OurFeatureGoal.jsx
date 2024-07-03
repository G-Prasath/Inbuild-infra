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
            Experience seamless integration with our platform. If you encounter
            any issues with the integration process Our Team.
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
                Create an Account:
              </p>
              <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">
                Get started by registering for an account. No complex onboarding
                processes.
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
                Choose Features:
              </p>
              <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">
                Select from a variety of features and functionalities tailored
                to your needs.
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
                Customize Settings:
              </p>
              <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">
                Tailor the platform to your preferences. Define settings,
                alerts, and integrations.
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
                Activate and Explore:
              </p>
              <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">
                Activate your account and start exploring the possibilities of
                our platform.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatureGoal;
