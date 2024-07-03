import React from 'react'

const Header = () => {
  return (
    <>
    <div className='w-full bg-yellow-800 h-14 flex place-items-stretch '>
        <button className='p-1 rounded-xl text-white focus:ring-1 focus:ring-red-200 ring-offset-1 m-auto' >Discover</button>
        <button className=' p-1 rounded-xl text-white focus:ring-1 focus:ring-red-200 ring-offset-1 m-auto' >Team</button>
        <button className=' p-1 rounded-xl text-white focus:ring-1 focus:ring-red-200 ring-offset-1 m-auto' >Gallery</button>
        <button className=' p-1 rounded-xl text-white focus:ring-1 focus:ring-red-200 ring-offset-1 m-auto' >About</button>
        <button className='border-solid border-2 p-1 rounded-xl border-white  text-white focus:ring-1 focus:ring-red-200 ring-offset-1 m-auto bg-yellow-700' >Events</button>

    </div>
    </>
  )
}

export default Header