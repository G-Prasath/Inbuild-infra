import React, { useState, useEffect } from "react";
import { IoIosArrowDropup } from "react-icons/io";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 3 blocks
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-4 z-10">
      <div
        className={`back-to-top-button ${isVisible ? "show" : "hide"} cursor-pointer`}
        onClick={scrollToTop}
      >
        <img src="/up-arrow.png" alt="up-arrow" className={`w-[35px] ${isVisible? "" : "hidden"}`}/>
      </div>
    </div>
  );
};

export default BackToTopButton;
