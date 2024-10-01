import React from 'react'
import { motion } from "framer-motion"
import Navbar from './Navbar';
import Work from './Courses/Work';
import Stripes from './Courses/Stripes';
import Products from './Courses/Products';
import Cards from './Courses/Cards';
import Marquees from './Courses/Marquees';
import Footer from './Footer';
function Courses() {
  return (
   <>
    <div className='w-full h'>
      <div className='max-w-screen-xl mx-auto'>
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
      </div>
    </div>
   </>
  )
}

export default Courses