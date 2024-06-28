import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PrimaryBtn from "../common/PrimaryBtn"
import { Reveal } from "../../hooks/Reveal";
import FunFact from "../common/FunFact";


const About = () => {
  return (
    <div className="bg-zinc-100">
      <div className="flex flex-col lg:flex-row min-h-screen py-[5%]">
        <div
          className="lg:w-1/2 lg:p-12 p-5 bg-white"
          
        >
          <Reveal>
          <div className="mb-8 z-1">
            <h1 className="text-4xl font-bold">BePro.</h1>
            <p className="text-zinc-500">Business Special Template</p>
          </div>
          </Reveal>

          <Reveal>
          <div className="mb-8">
            <p className="text-2xl font-[400] text-zinc-500 lg:w-[500px] leading-[40px]">
              We Are Creative & Special Team competencies before{" "}
              <span className="font-bold">integrated platforms.</span>
            </p>

            <hr className="my-4 border-zinc-600 w-20" />

          </div>
          </Reveal>

          <Reveal>
          <div>
            <h3 className="text-3xl font-bold text-zinc-600">about us.</h3>
            <p className="text-zinc-600 my-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus sapiente quos perferendis error adipisci deleniti
              accusantium similique quaerat! Sunt a voluptate rerum placeat.
              Provident perferendis a quidem distinctio molestias rerum! Quis
              blanditiis nostrum numquam consectetur magni qui omnis ipsa
              dolores.
            </p>
            
            <FunFact/>

          </div>

          </Reveal>

          <Reveal>
          <div className="my-10">
            <Link to="/about">
              <PrimaryBtn text="Read More" />
            </Link>
          </div>
          </Reveal>
        </div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/about.png"
            alt="Building"
            className="w-full aspect-square"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
