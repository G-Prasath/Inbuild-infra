import React from "react";
import { motion } from "framer-motion";
import Buttons from "../../components/common/Buttons";
import { Link } from "react-router-dom";
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FiVideo } from "react-icons/fi";
import { GiPodiumWinner } from "react-icons/gi";

const Layout_5 = () => {
  return (
    <div className="bg-zinc-100 relative max-h-max overflow-hidden lg:px-[5%]">
      <div className="flex flex-col lg:flex-row">
        <motion.div
          className="lg:w-2/6 relative flex justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <div className="w-full h-full bg-cover bg-center flex flex-col justify-evenly items-center max-md:h-[80vh] max-md:mb-10" style={{ backgroundImage: "url(/L_5/bg.png)"}}>

            {/* Sec - 1 */}
            <div className="flex items-center gap-x-5">
              <div className="w-[80px] h-[80px] bg-cover bg-center inline-flex justify-center items-center" style={{ backgroundImage: "url(/L_5/Polygon_1.png)"}}>
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
              <div className="w-[80px] h-[80px] bg-cover bg-center inline-flex justify-center items-center" style={{ backgroundImage: "url(/L_5/Polygon_2.png)"}}>
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
              <div className="w-[80px] h-[80px] bg-cover bg-center inline-flex justify-center items-center" style={{ backgroundImage: "url(/L_5/Polygon_3.png)"}}>
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
              <div className="w-[80px] h-[80px] bg-cover bg-center inline-flex justify-center items-center" style={{ backgroundImage: "url(/L_5/Polygon_4.png)"}}>
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

        <motion.div
          className="lg:w-4/6 lg:p-12 max-md:p-[5%] bg-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <p className="text-2xl font-[400] text-zinc-500 lg:w-[500px] leading-[40px]">
              We Are Creative & Special Team competencies before{" "}
              <span className="font-bold">integrated platforms.</span>
            </p>

            <hr className="my-4 border-zinc-600 w-20" />

            <p className="text-zinc-600">
              Quickly leverage other's distributed internal or "organic" sources
              rather than empowered materials. Conveniently leverage existing
              client-centric solutions with transparent ROI.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <IoCameraOutline fontSize={30} className="mb-3" />
              <p className="font-[600] text-zinc-500 text-[16px] ">Bussiness Essential</p>
              <p className="text-[14px] text-zinc-500">Quickly leverage other&apos;s distributed internalor “organic” sources.</p>
            </div>
            <div>
              <HiOutlineSpeakerphone fontSize={30} className="mb-3" />
              <p className="font-[600] text-zinc-500 text-[16px] ">Bussiness Essential</p>
              <p className="text-[14px] text-zinc-500">Quickly leverage other&apos;s distributed internalor “organic” sources.</p>
            </div>
            <div>
              <FiVideo fontSize={30} className="mb-3" />
              <p className="font-[600] text-zinc-500 text-[16px] ">Bussiness Essential</p>
              <p className="text-[14px] text-zinc-500">Quickly leverage other&apos;s distributed internalor “organic” sources.</p>
            </div>
            <div>
              <GiPodiumWinner fontSize={30} className="mb-3" />
              <p className="font-[600] text-zinc-500 text-[16px] ">Bussiness Essential</p>
              <p className="text-[14px] text-zinc-500">Quickly leverage other&apos;s distributed internalor “organic” sources.</p>
            </div>
          </div>

          
         
        </motion.div>
      </div>
    </div>
  );
};

export default Layout_5;
