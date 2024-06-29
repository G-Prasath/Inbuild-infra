import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import { Reveal } from "../hooks/Reveal";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A1D2B]">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pt-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-4">
              <div>
                <Link to="/">
                  <div className="flex items-center space-x-2 text-2xl font-medium">
                    <span>
                      <img
                        src="/logo.png"
                        alt="AI Logo"
                        width="50"
                        className="w-16"
                      />
                    </span>
                    <span className="text-white">Inbuild Infra</span>
                  </div>
                </Link>
              </div>
              <div className="max-w-md pr-16 text-md text-gray-200">
                Enhance productivity and efficiency with cutting-edge artificial
                intelligence solutions for your business operations.
              </div>
              <div className="flex space-x-2">
                <Link
                  to="/"
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <FaSquareFacebook className="text-[25px]"/>
                </Link>
                <Link
                  to="/"
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <FaSquareXTwitter className="text-[25px]"/>
                </Link>
                <Link
                  to="/"
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <IoLogoLinkedin className="text-[25px]"/>
                </Link>
                <Link
                  to="/"
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <FaSquarePinterest className="text-[25px]"/>
                </Link>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Our Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        to="/"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        AI Platform
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        AI Algorithms
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Industry Applications
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Use Cases
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        to="/"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Predictive Analysis
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Customer Experience
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Automation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Resources
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        to="/"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        to="/"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          <div className="mt-5 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-md text-center text-white">
              Copyright © 2024 . Crafted with
              by&nbsp;
              <Link rel="noopener" to="/">
                IB.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
