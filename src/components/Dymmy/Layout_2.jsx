import React from 'react'
import { motion } from 'framer-motion'

const Layout_2 = () => {
  return (
    <div className='bg-zinc-100'>
      <div className="flex flex-col lg:flex-row min-h-screen py-[5%]">

        <motion.div 
          className="lg:w-1/2 p-12 bg-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold">BePro.</h1>
            <p className="text-zinc-500">Business Special Template</p>
          </div>
          <div className="mb-8">
            <p className="text-2xl font-[400] text-zinc-700 lg:w-[500px] leading-[40px]">
              We Are Creative & Special Team competencies before integrated platforms.
            </p>
            
            <hr className="my-4 border-zinc-300" />
            <p className="text-zinc-600">
              Quickly leverage other's distributed internal or "organic" sources
              rather than empowered materials. Conveniently leverage existing
              client-centric solutions with transparent ROI.
            </p>
            <p className='text-zinc-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam numquam quas praesentium a? Labore eum soluta accusamus consequatur ipsam corrupti, quisquam earum pariatur tempore esse quod possimus maiores recusandae commodi cum magni qui reprehenderit asperiores incidunt natus nostrum iure ex.</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-zinc-600">about us.</h3>
            <p className='text-zinc-600 my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sapiente quos perferendis error adipisci deleniti accusantium similique quaerat! Sunt a voluptate rerum placeat. Provident perferendis a quidem distinctio molestias rerum! Quis blanditiis nostrum numquam consectetur magni qui omnis ipsa dolores.</p>
          </div>
        </motion.div>

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
  )
}

export default Layout_2
