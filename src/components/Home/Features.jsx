import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "../../hooks/Reveal";
import { whyCard } from "../../data/Home";

const Features = () => {
  return (
    <div className="bg-zinc-100 relative max-h-max overflow-hidden lg:px-[5%] pb-[5%]">
      <div className="flex flex-col lg:flex-row">
        <motion.div
          className="lg:w-2/6 relative flex justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="w-full h-full bg-cover bg-center flex flex-col justify-evenly items-center max-md:h-[80vh] max-md:mb-10"
            style={{ backgroundImage: "url(/L_5/bg.png)" }}
          >
            {/* Sec - 1 */}
            <div className="flex items-center gap-x-5">
              <div
                className="w-[80px] h-[80px] bg-cover bg-center inline-flex justify-center items-center"
                style={{ backgroundImage: "url(/L_5/Polygon_1.png)" }}
              >
                <img src="/L_5/Group.png" alt="" className="w-[30px]" />
              </div>
              <div>
                <p className="font-[400] text-zinc-400 text-[16px]">
                  Section Analysis
                </p>
                <p className="text-[14px] text-zinc-200 font-bold">$17860.00</p>
              </div>
            </div>
            {/* Sec - 2 */}
            <div className="flex items-center gap-x-5">
              <div
                className="w-[80px] h-[80px] bg-cover bg-center inline-flex justify-center items-center"
                style={{ backgroundImage: "url(/L_5/Polygon_2.png)" }}
              >
                <img src="/L_5/Vector.png" alt="" className="w-[30px]" />
              </div>
              <div>
                <p className="font-[400] text-zinc-400 text-[16px]">
                  Section Analysis
                </p>
                <p className="text-[14px] text-zinc-200 font-bold">$17860.00</p>
              </div>
            </div>
            {/* Sec - 3 */}
            <div className="flex items-center gap-x-5">
              <div
                className="w-[80px] h-[80px] bg-cover bg-center inline-flex justify-center items-center"
                style={{ backgroundImage: "url(/L_5/Polygon_3.png)" }}
              >
                <img src="/L_5/gift.png" alt="" className="w-[30px]" />
              </div>
              <div>
                <p className="font-[400] text-zinc-400 text-[16px]">
                  Section Analysis
                </p>
                <p className="text-[14px] text-zinc-200 font-bold">$17860.00</p>
              </div>
            </div>
            {/* Sec - 5 */}
            <div className="flex items-center gap-x-5">
              <div
                className="w-[80px] h-[80px] bg-cover bg-center inline-flex justify-center items-center"
                style={{ backgroundImage: "url(/L_5/Polygon_4.png)" }}
              >
                <img src="/L_5/user.png" alt="" className="w-[30px]" />
              </div>
              <div>
                <p className="font-[400] text-zinc-400 text-[16px]">
                  Section Analysis
                </p>
                <p className="text-[14px] text-zinc-200 font-bold">$17860.00</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="lg:w-4/6 lg:p-12 p-[5%] bg-white">
          <div className="mb-8">
            <Reveal>
              <p className="text-4xl font-bold text-zinc-900 lg:w-[500px] leading-[40px]">
                Our Features
              </p>
            </Reveal>

            <hr className="my-4 border-zinc-600 w-20" />

            <Reveal>
              <p className="text-zinc-600">
                Quickly leverage other's distributed internal or "organic"
                sources rather than empowered materials.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-10">
            {whyCard.map((item, index) => {
             
            return(
              <div
                key={index}
                className="whychoose_shadow p-[2px] overflow-hidden relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 shadow-lg"
              >
                <div className="bg-white p-5 rounded-md">
                  <Reveal>
                    <item.img fontSize={30} className="mb-3" />
                    <p className="font-[600] text-zinc-500 text-[16px]">
                      {item.title}
                    </p>
                    <p className="text-[14px] text-zinc-500">{item.disc}</p>
                  </Reveal>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
