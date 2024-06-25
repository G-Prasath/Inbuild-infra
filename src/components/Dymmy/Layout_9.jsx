import React from 'react'
import { Reveal } from '../../hooks/Reveal'
import ServiceCard from '../ServiceCard'
import { serviceCard } from '../../data/Home'

const Layout_9 = () => {
  return (
    <div className='sec-padding'>
      <Reveal>
        <div className="mb-8 z-1">
          <h1 className="text-4xl font-bold">Services</h1>
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

export default Layout_9
