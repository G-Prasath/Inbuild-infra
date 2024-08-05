import React from 'react'

const Funfact = () => {
  return (
    <div className='py-8'>
      <div className="flex flex-row flex-wrap justify-center gap-10">


        <div className="flex flex-col bg-slate-50 rounded-lg p-4 shadow-md hover:cursor-pointer hover:shadow">
          <div className="flex gap-2">
            <div className="font-mono font-bold">Our Employee</div>
          </div>
          <div className="flex justify-center text-2xl">100+</div>
        </div>



        <div className="flex flex-col bg-slate-200 rounded-lg p-4 shadow-md hover:cursor-default hover:bg-slate-100 hover:shadow-lg">
          <div className="flex gap-2">
            <div className="font-mono font-bold">Our Works</div>
          </div>
          <div className="flex justify-center text-2xl">2600+</div>
        </div>



        <div className="flex flex-col bg-slate-200 rounded-lg p-4 shadow-md hover:cursor-default hover:bg-slate-100 hover:shadow-lg">
          <div className="flex gap-2">
            <div className="font-mono font-bold">Our Vendors</div>
          </div>
          <div className="flex justify-center text-2xl">20+</div>
        </div>



        <div className="flex flex-col bg-slate-200 rounded-lg p-4 shadow-md hover:cursor-default hover:bg-slate-100 hover:shadow-lg">
          <div className="flex gap-2">
            <div className="font-mono font-bold">Developments</div>
          </div>
          <div className="flex justify-center text-2xl">100+</div>
        </div>
      </div>
    </div>
  )
}

export default Funfact
