import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PrimaryBtn from "../common/PrimaryBtn"
import { Reveal } from "../../hooks/Reveal";
import FunFact from "../common/FunFact";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const About = () => {
  return (
    <div className="bg-zinc-100">
      <div className="flex flex-col lg:flex-row min-h-screen py-[5%]">
        <div
          className="lg:w-1/2 lg:p-12 p-5 bg-white"
          
        >
          <Reveal>
          <div className="mb-4 z-1">
            <h1 className="text-4xl max-sm:text-2xl font-bold">Roofing Contractors in Chennai</h1>
          </div>
          </Reveal>

          <Reveal>
          <div>
            <p className="text-zinc-600 my-2 text-justify sm:leading-[25px]">
            Inbuilt Infra is the leading roofing contractor in Chennai, offering a wide range of roofing services to meet all your needs. We specialize in both residential roofing and commercial roofing, ensuring that your home or business is protected with the highest quality materials and workmanship.</p>
            <p className="text-zinc-600 my-2 text-justify sm:leading-[25px]">At Inbuilt Infra, we also provide specialized roofing solutions including tensile roofing, polycarbonate roofing, PUF panel roofing, terrace roofing and retractable roofing. And WPC pergola, Facade, Mangalore tile roofing, UPVC roofing ensure we cater to all your unique roofing requirements. As one of the leading roofing contractors and roofing companies in Chennai, we pride ourselves on delivering exceptional service.</p>
            <p className="text-zinc-600 my-2 text-justify sm:leading-[25px]">As local roofers with excellent roofing reviews, we are committed to providing top-notch service. Our team consists of licensed roofing contractors and insured roofing contractors who offer free roof inspections and accurate roofing estimates.</p>
            
            <FunFact/>

          </div>

          </Reveal>

          <Reveal>
          <div className="my-5">
            <Link to="/about">
              <PrimaryBtn fText="Read More" sText="Click Here" />
            </Link>
          </div>
          </Reveal>
        </div>

        <motion.div
          className="lg:w-1/2 aspect-square bg-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <LazyLoadImage
            src="/About/HomeAbout.avif"
            alt="Building"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
