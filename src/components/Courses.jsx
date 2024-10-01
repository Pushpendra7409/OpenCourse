import React from 'react'
import { motion } from "framer-motion"
import Navbar from './Navbar';
import Work from './Courses/Work';
import Stripes from './Courses/Stripes';
import Products from './Courses/Products';


function Courses() {
  return (
   <>
    <div className='w-full h'>
      <div className='max-w-screen-xl mx-auto'>
        <Navbar />
        <Work />
        <Stripes />
        <Products />
      </div>
    </div>
   </>
  )
}

export default Courses