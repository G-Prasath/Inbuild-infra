import React from "react";

const Gallery = ({ galleryImg }) => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <p className="text-zinc-800 font-bold md:text-4xl text-3xl my-5">
          Our Project Gallery
        </p>
      </div>
      <div className="columns-1 md:columns-2 xl:columns-3 gap-7 ">
        {
          galleryImg.map((item, index) => (
            <div className=" break-inside-avoid mb-8" key={index}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={item}
                alt="Gallery image"
              />
            </div>
          ))
        }
      </div>

    </>
  );
};

export default Gallery;
