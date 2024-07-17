import React from 'react'
import { Reveal } from '../../hooks/Reveal'

const WhyChoose = ({ datas, title }) => {
    return (
        <div className="w-full mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col justify-between">
            <div>
                <div className="text-center">
                    <p className="text-3xl sm:text-[30px] leading-normal font-extrabold tracking-tight text-zinc-800">
                        {`Why Choose Inbuilt Infra for  ${title}`}
                    </p>
                </div>

                <div className="mt-20">
                    <ul className="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">
                        {
                            datas.map((item, index) => (
                                <li className="p-5 pb-10 text-center" key={index}>
                                    <div className="flex flex-col items-center justify-between bg-gray-100">
                                        <div className="flex-shrink-0 relative top-0 -mt-16">
                                            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-zinc-800 text-white border-4 border-white text-xl font-semibold">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div className="mt-4 p-8">
                                            <Reveal>
                                                <h4 className="text-lg leading-6 font-semibold text-gray-900">{item.title}</h4>
                                                <p className="mt-2 text-base leading-6 text-gray-500">
                                                    {item.text}
                                                </p>
                                            </Reveal>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose
