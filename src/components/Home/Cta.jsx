import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Call to Action
          </h2>
          <p className="my-3 text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
          Explore our services. Contact us today to learn more!
          </p>
          <div className="flex gap-5 justify-center">
            <Link to="https://wa.me/7823967391" className="px-8 font-bold py-2 text-white bg-[#25d366] hover:bg-white border hover:border-black hover:text-black transition-all duration-[.5]" target="_blank">WhatsApp</Link>
            <Link to="tel:+917823967391" className="px-8 font-bold py-2 text-white bg-[#0693e3] hover:bg-white border hover:border-black hover:text-black transition-all duration-[.5]" target="_blank">Call</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
