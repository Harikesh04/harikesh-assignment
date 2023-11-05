import React from 'react'

const CalculatorResult = () => {
  return (
    <div className='flex flex-col gap-5 lg:flex-row w-full justify-between mt-8'>

    <div className='bg-green-100 rounded-md p-3 text-center lg:w-[45%]'>
      <span>Net Capital gains tax amount </span>
      <br />
      <span className='text-customGreen'>$ 2,500</span>
    </div>
    <div className='bg-blue-100 rounded-md p-3 text-center lg:w-[45%]'>
      <span>The tax you need to pay*</span>
      <br />
      <span className='text-blue-800'>$ 812.5</span>
    </div>
    
    </div>
  )
}

export default CalculatorResult