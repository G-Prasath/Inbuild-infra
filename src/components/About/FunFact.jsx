import React from 'react'
import CountUp from 'react-countup';
import { GrGroup } from "react-icons/gr";
import { MdOutlineAssuredWorkload } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { SiNginxproxymanager } from "react-icons/si";
import { Reveal } from '../../hooks/Reveal';


const FunFact = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 sm:py-24 py-8 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <Reveal>
                    <h2 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Leading the Roofing Industry</h2>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Inbuilt Infra is the NO.1 roofing contractor in TamilNadu. We offer expert advice on roof maintenance and provide estimated quotations during site visits. Contact us and start your roofing project with us.</p>
                    </Reveal>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <GrGroup className="text-zinc-800 w-12 h-12 mb-3 inline-block" />
                            <p className="title-font font-bold text-3xl text-zinc-900">
                                <CountUp end={2500} duration={5} /><span>&nbsp;</span>+
                            </p>
                            <p className="leading-relaxed tracking-wide"> Finished Projects</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <FaAward className="text-zinc-800 w-12 h-12 mb-3 inline-block" />
                            <p className="title-font font-bold text-3xl text-zinc-900">
                                <CountUp end={15} duration={5} /><span>&nbsp;</span>+
                            </p>
                            <p className="leading-relaxed tracking-wide">Years Experience</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <MdOutlineAssuredWorkload className="text-zinc-800 w-12 h-12 mb-3 inline-block" />
                            <p className="title-font font-bold text-3xl text-zinc-900">
                                <CountUp end={2000} duration={5} /><span>&nbsp;</span>+
                            </p>
                            <p className="leading-relaxed tracking-wide">Reputed Customers</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        <SiNginxproxymanager className="text-zinc-800 w-12 h-12 mb-3 inline-block" />
                            <p className="title-font font-bold text-3xl text-zinc-900">
                                <CountUp end={250} duration={5} /><span>&nbsp;</span>+
                            </p>
                            <p className="leading-relaxed tracking-wide">Workers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact
