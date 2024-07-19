import React from 'react'

const JobBadges = () => {
  const list = ["Sales Executive", "Digital Marketing", "Web Developer", "Finance", "Sales Manager", "Digital Marketing", "Web Developer", "Finance", "Sales Manager"];
  return (
    <div className='py-8 flex items-center justify-center w-full'>

      <div className="flex flex-wrap max-w-xl w-full p-2 gap-1 md:gap-2 justify-center items-center text-sm text-white md:text-md">
        {
          list.map((item, index) => (
            <div key={index} class="bg-cyan-500 rounded px-2 py-2">
              {item}
            </div>
          ))
        }
      </div>


    </div >
  )
}

export default JobBadges
