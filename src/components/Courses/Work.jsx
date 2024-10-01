import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"


function Work() {

    const [images, setImages] = useState(
      [
        {url:"/Img1.png", top: "50%", left: "50%", isActive: false},
        {url:"/Img2.png", top: "53%", left: "43%", isActive: false},
        {url:"/Img3.png", top: "43%", left: "53%", isActive: false},
        {url:"/Img4.png", top: "60%", left: "50%", isActive: false},
        {url:"/Img5.png", top: "67%", left: "55%", isActive: false},
        {url:"/Img6.png", top: "70%", left: "45%", isActive: false},
        {url:"/Img7.png", top: "77%", left: "50%", isActive: false},
      ]
    )

    const { scrollYProgress } = useScroll()

    scrollYProgress.on("change", (data) => {
      function imagesShow(arr){
        setImages(prev => (
          prev.map((item, index) => (
            arr.indexOf(index) === -1 ? (
              {...item, isActive: false}
            )
            : {...item, isActive: true}
          ))
        ))
      }

      switch(Math.floor(data * 100)){
        case 0:
          imagesShow([])
          break;
        case 1:
          imagesShow([0])
          break;
        case 2:
          imagesShow([0,1])
          break;
        case 3:
          imagesShow([0,1,2,3])
          break;
        case 4:
          imagesShow([0,1,2,3,4])
          break;
        case 5:
          imagesShow([0,1,2,3,4,5])
          break;
        case 6:
          imagesShow([0,1,2,3,4,5,6])
          break;
        case 7:
          imagesShow([0,1,2,3,4,5,6,7])
         break;
      }
    })

  //   useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //     showNHideImages (Math.floor(latest*100));
  //   })

  // function showNHideImages(scrollval){
  //   switch(scrollval) {
  //     case 1 :
  //     console.log("abcd")
  //     case 2 :
  //     console.log("efgh")
  //     case 3 :
  //     console.log("ijkl")
  //   }
  // }

  return (
  <div className='w-full mt-10'>
  <div className='relative max-w-screen-xl mx-auto text-center'>
    <h1 className='text-[28vw] leading-none font-medium select-none tracking-tight'>work</h1>
    <div className='absolute top-0 w-full h-full'>
        {images.map(
            (elem, index) =>
             elem.isActive && (
            <img key={index}
             className='absolute w-80 rounded-lg -translate-x-[50%] -translate-y-[50%]'
             src={elem.url} 
             style= {{top: elem.top, left:elem.left}} 
             alt=""/>
             )  
        )}
    </div>
  </div>
  </div>
  )
}

export default Work