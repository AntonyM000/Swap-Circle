import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";

const Tickets = () => {
  return (
    <>
    <div className='w-full flex justify-around mb-3'>
        <NavLink className='border-5 p-1 rounded-3xl'>All</NavLink>
        <NavLink className='border-5 p-1 rounded-3xl'>Swapping Event</NavLink>
        <NavLink className='border-5 p-1 rounded-3xl'>Swap Tokens</NavLink>
    </div>
<div className="flex flex-wrap justify-center ">
       <div className='  m-4 rounded-3xl '>
         <div className=" bg-[url('/landingCarouselOne.jpg')] rounded-t-xl  bg-no-repeat  w-48 bg-cover   container  "> 
         <div className="container-xl   ">
        
            <img src="landingCarouselOne.jpg" alt="" className=' ' />
         </div>
         </div>

        <div className="container-xl w-48 rounded-b-xl flex flex-col shadow ">
        <h5 className='text-slate-500 text-xs'>Jun 24, 2024 - 9:00AM</h5>
        <h3 className='font-bold'>SWAPMEET VENDOR TICKET</h3>
        <h5 className='text-slate-500 text-sm'>Ksh.1000</h5>
        
        <div className="flex"><CiLocationOn/>
            <h5 className='text-slate-500 text-xs'>Nairobi Street Kitchen</h5>
        </div>
        <button className=' p-1 m-1 bg-black text-white rounded-lg shadow-2xl flex justify-center' ><LuShoppingBag className='mt-1 mr-1'/>Add</button>
        <button className='  shadow-2xl p-1 m-1 bg-white rounded-lg  flex justify-center '>Checkout<label className='rounded-3xl w-6 justify-center text-white bg-black ml-1'>2</label></button>
</div>
       </div>
       <div className=' m-4 rounded-3xl '>
         <div className=" bg-[url('eventimages/432935191_741126114825125_4144358458579219024_n.jpg')] rounded-t-xl  bg-no-repeat  w-48 bg-cover   container  "> 
         <div className="container-xl   ">
        
            <img src="eventimages/432935191_741126114825125_4144358458579219024_n.jpg" alt="" className=' ' />
         </div>
         </div>

        <div className="container-xl w-48 rounded-b-xl flex flex-col shadow ">
        <h5 className='text-slate-500 text-xs'>Jun 24, 2024 - 9:00AM</h5>
        <h3 className='font-bold'>SWAPMEET GATE TICKET</h3>
        <h5 className='text-slate-500 text-sm'>Ksh.1000</h5>
        
        <div className="flex"><CiLocationOn/>
            <h5 className='text-slate-500 text-xs'>Nairobi Street Kitchen</h5>
        </div>
        <button className=' p-1 m-1 bg-black text-white rounded-lg shadow-2xl flex justify-center' ><LuShoppingBag className='mt-1 mr-1'/>Add</button>
        <button className='  shadow-2xl p-1 m-1 bg-white rounded-lg  flex justify-center '>Checkout<label className='rounded-3xl w-6 justify-center text-white bg-black ml-1'>2</label></button>
</div>
       </div>

       
       <div className='  m-4 rounded-3xl '>
         <div className=" bg-[url('/ticketimages/swap1.png')] rounded-t-xl  bg-no-repeat  w-48 bg-cover   container  "> 
         <div className="container-xl   ">
        
            <img src="/ticketimages/swap1.png" alt="" className=' ' />
         </div>
         </div>

        <div className="container-xl w-48 rounded-b-xl flex flex-col shadow ">
        <h5 className='text-slate-500 text-xs'>Jun 24, 2024 - 9:00AM</h5>
        <h3 className='font-bold'>SWAPMEET GROUP TICKET</h3>
        <h5 className='text-slate-500 text-sm'>Ksh.1000</h5>
        
        <div className="flex"><CiLocationOn/>
            <h5 className='text-slate-500 text-xs'>Nairobi Street Kitchen</h5>
        </div>
        <button className=' p-1 m-1 bg-black text-white rounded-lg shadow-2xl flex justify-center' ><LuShoppingBag className='mt-1 mr-1'/>Add</button>
        <button className='  shadow-2xl p-1 m-1 bg-white rounded-lg  flex justify-center '>Checkout<label className='rounded-3xl w-6 justify-center text-white bg-black ml-1'>2</label></button>
</div>
       </div>

</div>



    {/* <div className="container-xl w-48 rounded-xl flex flex-col shadow-2xl ">
        
            <img src="landingCarouselOne.jpg" alt="" className='rounded ' />
      
        <h5 className='text-slate-500 text-xs'>Jun 24, 2024 - 9:00AM</h5>
        <h3 className='font-bold'>SWAPMEET GATE TICKET</h3>
        <h5 className='text-slate-500 text-sm'>Ksh.1000</h5>
        
        <div className="flex"><CiLocationOn/><h5 className='text-slate-500 text-xs'>Nairobi Street Kitchen</h5></div>
        <button className='shadow p-1 m-1 bg-red-800 rounded-lg flex justify-center' ><LuShoppingBag className='mt-1 mr-1'/>Add</button>
        <button className='shadow p-1 m-1 bg-red-800 rounded-lg  flex justify-center '>Checkout<label className='rounded-3xl w-6 justify-center text-white bg-black ml-1'>2</label></button>

    </div> */}
    </>
  )
}

export default Tickets