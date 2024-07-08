import React from 'react'
import { Reveal } from '../../hooks/Reveal'

const Benifites = ({ benifitesData }) => {
  return (
    <div className="bg-gray-200 px-2 py-10">
      <div id="features" className="mx-auto max-w-6xl">
        <p className="text-center text-base font-semibold leading-7 text-primary-500">Features</p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Benefits of Tensile Fabric Roofing
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          {
            benifitesData.map((item, index) => (
              <li className="rounded-xl bg-white px-6 py-8 shadow-sm" key={index}>
                <img
                  src={item.img}
                  alt=""
                  className="mx-auto h-10 w-10"
                />
                <Reveal>
                  <h3 className="my-3 font-display font-medium">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    {item.para}
                  </p>
                </Reveal>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Benifites
