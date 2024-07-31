import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const linkClass=({isActive})=>(isActive ? 'm-auto rounded-xl text-white ring-1 ring-white ring-offset-1 p-1':'m-auto rounded-xl text-white p-1')
  return (
    <>
    <div className='w-full  bg-yellow-800 h-14 flex place-items-stretch '>
        <NavLink className={linkClass} to='/' >Discover</NavLink>
        {/* <button className=' p-1 rounded-xl text-white focus:ring-1 focus:ring-red-200 ring-offset-1 m-auto' >Team</button> */}
        <NavLink className={linkClass} to='/gallery' >Gallery </NavLink>
        <NavLink className={linkClass} to='/team' >Team </NavLink>
        <NavLink className={linkClass} to='/tickets' >Tickets </NavLink>
        <NavLink className={linkClass} to='/about' >About </NavLink>



        {/* <button className=' p-1 rounded-xl text-white focus:ring-1 focus:ring-red-200 ring-offset-1 m-auto' >About</button> */}
        {/* <button className='border-solid border-2 p-1 rounded-xl border-white  text-white focus:ring-1 focus:ring-red-200 ring-offset-1 m-auto bg-yellow-700' >Events</button> */}

    </div>
    </>
  )
}

export default Header