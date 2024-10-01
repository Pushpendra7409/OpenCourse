import React from 'react'

function Hero() {
  return (
    <>
        <div className='py-20'>
        <div className='w-full'>
  <div className='relative max-w-screen-xl mx-auto text-center text-white'>
    <h1 className='text-[11vw] leading-none font-medium select-none tracking-tighter'>Em<span className='bg-blue-500 bg-clip-text text-transparent' 
    // style={{textShadow: '0 0 8px rgba(255, 50, 50, 0.8), 0 0 16px rgba(255, 50, 50, 0.6), 0 0 24px rgba(255, 50, 50, 0.4)'}}>
    >power</span>{' '}your{' '} 
    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Future</span>{' '} 
    <span>with</span>{' '} 
    <span className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent'>Knowledge</span></h1>
  </div>
  </div>
        </div>
    </>
  )
}

export default Hero