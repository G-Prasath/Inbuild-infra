import React from 'react'

const Secbtn = ({fText, sText}) => {
  return (
    <button className="
        group
        p-5
        cursor-pointer 
        relative  
        text-xl 
        font-bold 
        border-0 
        flex 
        items-center 
        justify-center
        bg-transparent
         text-white
         h-auto  
         w-[150px]  
         overflow-hidden   
         transition-all
         duration-100">
            <span className="
        group-hover:w-full
        absolute 
        left-0 
        h-full 
        w-10 
        border-y
        border-l
         border-white
           transition-all
         duration-500">
            </span>

            <p className="text-[16px] group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
         duration-200">{fText}</p>

            <span className="group-hover:translate-x-0 text-[16px] group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200 text-[#000] bg-[#fff] w-full h-full flex items-center justify-center"> {sText}
            </span>

            <span
                className="group-hover:w-full absolute right-0 h-full w-10  border-y border-r  border-white transition-all duration-500">
            </span>
        </button>
  )
}

export default Secbtn
