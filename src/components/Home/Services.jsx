import React from 'react'
import { Reveal } from '../../hooks/Reveal'
import ServiceCard from '../ServiceCard'
import { serviceCard } from '../../data/Home'

const Services = () => {
  return (
    <div className='sec-padding'>
      <Reveal>
        <div className="mb-8 z-1">
          <h2 className="text-4xl font-bold max-sm:text-2xl">Our Roofing services</h2>
          <p className="text-zinc-500">Grow your Place</p>
        </div>
      </Reveal>

      {
        serviceCard.map((item, index) => (
          <ServiceCard key={index} img={item.img} title={item.title} disc={item.disc} count={index+1} />
        ))
      }
    </div>

  )
}

export default Services;
