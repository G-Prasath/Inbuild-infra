import React, { useState } from 'react';
import './Buttons.css'; // Import the custom CSS for keyframes
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Buttons = ({ text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={`relative transition-all duration-300 ease-in-out shadow-lg py-2 px-5 flex items-center justify-center text-white gap-2 font-bold border-3 border-white/30 outline-none overflow-hidden text-base hover:border-white/60 shine-effect bg-gray-900`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {text}
      <FaArrowAltCircleRight fontSize={20} className={`${isActive ? "rotate-[-45deg] transition-all duration-[.5]" : "transition-all duration-[.5]"}`} />
    </button>
  );
};

export default Buttons;
