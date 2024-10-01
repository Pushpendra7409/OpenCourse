import React from 'react'

function Stripe({val}) {
  return (
    
    <div className='w-1/12 px-5 py-7 flex justify-between mt-28'>
        <img src={val.url} alt="" className='mr-2 '/>
         {/* <span className='font-semibold'>{val.number}</span>  */}
    </div>
  )
}

export default Stripe