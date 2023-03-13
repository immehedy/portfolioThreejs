import React from 'react'

const LeftContent = () => {
  return (
    <div className='absolute top-[400px] left-1/4 transform -translate-x-1/2 -translate-y-1/2 '>
      <form className='flex flex-col gap-4 w-[400px]'>
      <h3 className='font-semibold text-[20px] mb-2'>Contact us</h3>
        <input type="text" className='p-2 rounded-sm' placeholder="Enter your name"/>
        <input type="email" className='p-2 rounded-sm' placeholder="Enter your email"/>
        <textarea rows={5} className='p-2 rounded-sm' placeholder="Your message"></textarea>
        <button type='submit' className='bg-btn-primary text-white px-2 py-1 rounded-sm'>Submit</button>
      </form>
    </div>
  )
}

export default LeftContent