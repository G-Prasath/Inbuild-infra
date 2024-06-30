import React from "react";
import { Link } from "react-router-dom";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-20 right-4 z-10">
      <Link
        to="https://api.whatsapp.com/send?phone=000000000" target="_blank"
        className="block w-8 items-center justify-center mb-3  shadow-md">
        <img src="/whatsapp.png" className="w-8" alt="WhatsApp"/>
      </Link>
      <Link
        href="tel:+91000000000"
        className="block w-8 rounded-full bg-white  items-center justify-center shadow-md"
      >
        <img src="/call.png" className="w-8" alt="Call" />
      </Link>
    </div>
  );
};

export default FloatingButtons;