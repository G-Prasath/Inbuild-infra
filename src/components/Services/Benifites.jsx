import React from 'react'
import { Reveal } from '../../hooks/Reveal'

const Benifites = () => {
  return (
    <div className="bg-gray-200 px-2 py-10">
      <div id="features" className="mx-auto max-w-6xl">
        <p className="text-center text-base font-semibold leading-7 text-primary-500">Features</p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        Benefits of Tensile Fabric Roofing
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <Reveal>
            <h3 className="my-3 font-display font-medium">15 years warranty</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            Inbuilt Infra offers 15-year warranty for our tensile structures ensuring protection from all climatic conditions and earning clients trust in our roofing solutions.
            </p>
            </Reveal>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530442/port-detection.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <Reveal>
            <h3 className="my-3 font-display font-medium">Quality</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            Our Quality roofing material ensures a strong roofing system which delivers long lasting protection and reliability
            </p>
            </Reveal>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530444/availability.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <Reveal>
            <h3 className="my-3 font-display font-medium">Unique design</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            Choose inbuilt infra your roofing solutions we offer exclusive design which ensure best and unique roofing design.
            </p>
            </Reveal>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <Reveal>
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">On-time delivery</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Inbuilt Infra delivers the project within the time frame of the project and within the budget to satisfy our customers.
              </p>
              </Reveal>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <Reveal>
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
              Cost effective
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              We provide tensile roofing service with less cost of budget compared to the other roofers in the market located in Chennai.
              </p>
              </Reveal>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/530453/mail-reception.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <Reveal>
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Customisable</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Inbuilt Infra offers customisable tensile roofing service based on the customers requirements with high quality.
              </p>
              </Reveal>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Benifites
