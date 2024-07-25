import React from 'react'
import { IoEye } from "react-icons/io5";
import { VscServerProcess } from "react-icons/vsc";
import { AiOutlineSafety } from "react-icons/ai";
import { Reveal } from '../../hooks/Reveal';

const Productivity = () => {
    return (
        <div className="h-full bg-zinc-50 w-full sm:py-20 py-5 p-4">
            <div className="grid gap-14 md:grid-cols-3 md:gap-5">
                <div className="rounded-xl bg-white p-6 text-center whychoose_shadow">
                    <div
                        className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                        <IoEye className='text-white text-[30px]' />
                    </div>
                    <Reveal>
                        <h3 className="text-darken mb-3 text-xl font-medium lg:px-14 uppercase">Vision</h3>
                        <p className="px-4 text-gray-500">Our vision is to offer exceptional roofing services that prioritize safety, durability and customer satisfaction. We achieve this through innovation and sustainable roofing solutions.</p>
                    </Reveal>
                </div>
                <div className="rounded-xl bg-white p-6 text-center whychoose_shadow">
                    <div
                        className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                        <VscServerProcess className='text-white text-[30px]' />
                    </div>
                    <Reveal>
                    <h3 className="text-darken mb-3 text-xl font-medium lg:px-14 uppercase">Mission</h3>
                    <p className="px-4 text-gray-500">Our Mission is to develop the roofing industry by introducing innovative approaches with new standards which exceed excellence and ensure client's trust.</p>
                        </Reveal>
                </div>
                <div className="rounded-xl bg-white p-6 text-center whychoose_shadow">
                    <div
                        className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
                        <AiOutlineSafety className='text-white text-[30px]' />
                    </div>
                    <Reveal>
                    <h3 className="text-darken mb-3 text-xl font-medium lg:px-14 uppercase">Quality</h3>
                    <p className="px-4 text-gray-500">Our company aim is to deliver superior quality through modern technique and a Consistency experts to fulfilling customer requirements in every roofing project. </p>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default Productivity
