import React from 'react'

const Layout_9 = () => {
  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
    <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
      <img
        className="xl:max-w-3xl"
        src="https://images.pexels.com/photos/5990153/pexels-photo-5990153.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1860"
        alt="Coffee from Heaven"
      />
      <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-xl w-full lg:absolute top-[25%] right-[10%] border border-[#000]">
        <div className="flex justify-between font-bold text-sm">
          <p>Product Review</p>
          <p className="text-gray-400">17th March, 2021</p>
        </div>
        <h2 className="text-3xl font-semibold mt-4 md:mt-10">Coffee From Heaven</h2>
        <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam nulla cupiditate saepe sed quis veritatis minus rem adipisci aliquid.
        </p>
        <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">
          Read More
        </button>
      </div>

      <p className='text-[130px] font-bold text-[#000] absolute top-0 right-10 opacity-[.5] z-[-1]'>01</p>
    </section>
  </section>
  )
}

export default Layout_9
