import React from "react";
import { Reveal } from "../../hooks/Reveal";

const Layout_7 = () => {
  return (
    <section className="text-gray-600 body-font bg-zinc-100">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
        <Reveal>
          <p className="text-2xl font-[100] text-zinc-500 lg:w-[500px] leading-[40px]">
            We Are Creative & Special Team competencies before{" "}
            <span className="font-bold">integrated platforms.</span>
          </p>
        </Reveal>
        </div>

        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Reveal>
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/500x300"
                />
              </Reveal>
            </div>
            <div className="md:p-2 p-1 w-1/2">
            <Reveal>
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/501x301"
              />
              </Reveal>
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/600x360"
              />
            </div>
          </div>

          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/601x361"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
            <Reveal>
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/502x302"
              />
              </Reveal>
            </div>
            <div className="md:p-2 p-1 w-1/2">
            <Reveal>
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/503x303"
              />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout_7;
