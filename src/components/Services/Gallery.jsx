import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <p className="text-zinc-800 font-bold md:text-4xl text-3xl my-5">
          Our Project Gallery
        </p>
      </div>
      <div className="columns-1 md:columns-2 xl:columns-3 gap-7 ">
        <div className=" break-inside-avoid mb-8">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/Service/App/tensile/01.jpg"
            alt="Gallery image"
          />
        </div>
        <div className=" break-inside-avoid  mb-8">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/Service/App/tensile/02.jpg"
            alt="Gallery image"
          />
        </div>
        <div className=" break-inside-avoid  mb-8">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/Service/App/tensile/002.jpg"
            alt="Gallery image"
          />
        </div>
        <div className=" break-inside-avoid  mb-8">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/Service/App/tensile/03.jpg"
            alt="Gallery image"
          />
        </div>
        <div className=" break-inside-avoid  mb-8">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/Service/App/tensile/04.jpg"
            alt="Gallery image"
          />
        </div>
        <div className=" break-inside-avoid  mb-8">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/Service/App/tensile/05.jpg"
            alt="Gallery image"
          />
        </div>
      </div>

    </>
  );
};

export default Gallery;
