import React from 'react'

function Video() {
  return (
    <>
    <div className='w-full py-10'>
       <div className='max-w-screen-xl mx-auto'>
      <video className='rounded-md' autoPlay muted loop>
        <source src="/Courses.mp4" type="video/mp4" />
        There is a Video here
      </video>
       </div>
    </div>
    </>
  )
}

export default Video