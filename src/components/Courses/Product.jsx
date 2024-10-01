import React from 'react'

function Product({val, mover, count}) {
  return (
    <div className='w-full py-20 h-[23rem] text-white bg-zinc-900 text-white'>
        <div onMouseEnter={() => {mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-3xl capitalize font-medium'>{val.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-10 text-lg'>{val.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Product