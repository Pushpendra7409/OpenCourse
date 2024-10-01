import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({width, start, para, hover= false}) {
  return (
    <motion.div whileHover={{backgroundColor: hover === true &&  "#7443ff" ,color: hover === true && "white",padding: "40px" }} className={`bg-white text-black p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between transition duration-100`}>
     <div className='w-full'>
        <div className='w-full flex items-center justify-between'>
            <h3 className='text-lg font-medium'>One Heading</h3>
            <IoIosArrowRoundForward  className='text-lg font-medium'/>
        </div>
        <h3 className='text-2xl font-medium mt-5'>Who we are</h3>
     </div>

     <div className='down w-full'>
     {
        start === true && (
            <>
         <h1 className='text-8xl tracking-tight leading-none'>Start a Project</h1> 
         <button className='rounded-full py-2 px-5 border-[1px] border-zinc-50 text-sm mt-5'>Contact Us.</button>
         </>
        )
     }

    {para === true && (
            <p className='text-sm text-zinc-400 font-medium mt-5'>News and Insights on Web Design, Webflow Development, and Creative Development.</p>
         )
    }
     </div>

    </motion.div>
  )
}

export default Card