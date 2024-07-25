import React from "react";
import { Link } from "react-router-dom";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-20 right-4 z-10">
      <Link
        to="https://wa.me/7823967391" target="_blank"
        className="block w-8 items-center justify-center mb-3  shadow-md">
        <img src="/whatsapp.png" className="w-8" alt="WhatsApp"/>
      </Link>
      <Link
        to="tel:+917823967391"
        className="block w-8 rounded-full bg-white  items-center justify-center shadow-md"
      >
        <img src="/call.png" className="w-8" alt="Call" />
      </Link>
    </div>
  );
};

export default FloatingButtons;