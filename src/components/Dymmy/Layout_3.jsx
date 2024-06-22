import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Buttons from "../../components/common/Buttons";
import { Link } from "react-router-dom";

const Layout_3 = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <div className="bg-zinc-100">
      <div className="flex flex-col lg:flex-row lg:h-screen ">
        <motion.div
          className="lg:w-1/2 bg-clr flex justify-end items-center lg:relative max-md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/layer-3.png"
            alt="Building"
            className="lg:w-[750px] w-full scale-x-[-1] lg:absolute right-[-5%]"
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 p-12 bg-white sec-padding max-md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <h1 className="text-2xl font-bold">BePro.</h1>
            <p className="text-sm text-zinc-500">Business Special Template</p>
          </div>
          <h2 className="text-2xl font-[400] mb-4 text-zinc-500">
            Intrinsicly optimize orthogonal core competencies
            <span className="text-blue-500 font-semibold">
              {" "}
              integrated platforms.
            </span>
          </h2>
          <p className="text-zinc-600 mb-8">
            Quickly leverage other's distributed internal or "organic" sources
            rather than empowered materials. Conveniently leverage existing
            client-centric solutions with transparent ROI.
          </p>
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span>Case Study</span>
              <span>76%</span>
            </div>
            <div className="w-full bg-zinc-200 h-2 rounded">
              <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: "76%" }}
              ></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span>Client Research</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-zinc-200 h-2 rounded">
              <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span>System Structure</span>
              <span>60%</span>
            </div>
            <div className="w-full bg-zinc-200 h-2 rounded">
              <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div className="my-10 w-full mt-10">
            <Link to="/about">
              <Buttons text="Read More" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Layout_3;