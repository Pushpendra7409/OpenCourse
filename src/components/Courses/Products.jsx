import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {
    var products = [
        {title: "HTML", description: "HTML (HyperText Markup Language) is the standard language for creating web pages. It structures content using elements like headings, paragraphs, links, and images, enabling browsers to display text, multimedia, and interactive features.", live: true, case: false},
        {title: "CSS", description: "CSS (Cascading Style Sheets) is a language used to style HTML documents. It controls the layout, colors, fonts, and overall presentation, making web pages visually appealing and user-friendly.", live: true, case: false},
        {title: "JavaScript", description: "JavaScript is a versatile scripting language used to create dynamic and interactive web content. It enables features like real-time updates, interactive maps, animations, and multimedia control, enhancing user experience on web pages.", live: true, case: true},
        {title: "MongoDB", description: "MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents. It offers scalability, high performance, and ease of use, making it ideal for modern applications requiring dynamic and complex data structures.", live: true, case: false},
        {title: "Express", description: "Express is a minimal and flexible Node.js web application framework. It provides robust features for building web and mobile applications, including routing, middleware, and HTTP utilities, making it a popular choice for server-side development.", live: true, case: false},
        {title: "React", description: "React is a popular JavaScript library for building user interfaces. It enables developers to create reusable UI components, manage state efficiently, and build dynamic, high-performance web applications with a declarative programming approach.", live: true, case: false},
        {title: "NodeJS", description: "Node.js is an open-source, cross-platform JavaScript runtime environment. It allows developers to run JavaScript on the server side, enabling the creation of scalable and high-performance applications using a single programming language.", live: true, case: false},

    ]

    const [position, setPosition] = useState(0);
    const mover = (val) => {
        setPosition(val * 23)
    }

  return (
    <div className='mt-28 relative'>
        {products.map((val, index) => <Product key={index} val={val} mover={mover} count={index} />)}
        <div className='absolute top-0 w-full h-full pointer-events-none'> 
          <motion.div 
          initial={{ y: position, x: "-50%" }} 
          animate={{ y: position + `rem` }}
          transition={{ease: [0.16, 1, 0.3, 1], duration: .5}}
          className='window absolute w-[32rem] h-[23rem] left-[55%] overflow-hidden'>

          <motion.div animate={{y: -position+`rem`}} transition={{ease: [0.16, 1, 0.3, 1], duration: .5}} className='w-full h-full'><img src="/html.png"></img></motion.div>
          <motion.div animate={{y: -position+`rem`}} transition={{ease: [0.16, 1, 0.3, 1], duration: .5}} className='w-full h-full'><img src="/css.png"></img></motion.div>
          <motion.div animate={{y: -position+`rem`}} transition={{ease: [0.16, 1, 0.3, 1], duration: .5}} className='w-full h-full'><img src="/js.png"></img></motion.div>
          <motion.div animate={{y: -position+`rem`}} transition={{ease: [0.16, 1, 0.3, 1], duration: .5}} className='w-full h-full'><img src="/mdb.png"></img></motion.div> 
          <motion.div animate={{y: -position+`rem`}} transition={{ease: [0.16, 1, 0.3, 1], duration: .5}} className='w-full h-full'><img src="/express.png"></img></motion.div>
          <motion.div animate={{y: -position+`rem`}} transition={{ease: [0.16, 1, 0.3, 1], duration: .5}} className='w-full h-full'><img src="/react.png"></img></motion.div>
          <motion.div animate={{y: -position+`rem`}} transition={{ease: [0.16, 1, 0.3, 1], duration: .5}} className='w-full h-full'><img src="/njs.png"></img></motion.div>
          </motion.div>
        </div>
    </div>
  )
}

export default Products