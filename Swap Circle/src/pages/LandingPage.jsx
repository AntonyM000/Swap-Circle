import React from 'react'
import Gallery from './Gallery'
 import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  // const isHome = true;
  return (
    <>
    <div className="bg-[url('/landingCarouselOne.jpg')] w-full h-96 p-2 bg-no-repeat bg-cover bg-center flex flex-col  justify-center  relative">
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-2'>

       <h1 className="text-3xl text-white font-bold underline mb-10  ">SUSTAINABLE FASHION THROUGH SWAPPING</h1>
       <h2 className='text-white'>Elevate your wardrobe while saving the planet</h2>
      <button className="text-white border-2 rounded-3xl flex p-1 mb-3 mt-12 w-3/12">See Events
        <GoArrowUpRight/>  
       </button>
      </div>
       
    </div>
    <div className='w-full flex place-content-center'>
      <h3 className='w-10/12'>Events and opportunities  to exchange clothing items with others, fostering a circular economy in fashion.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit, magna id lobortis pretium, nisl nulla faucibus orci, rhoncus posuere olor</h3>
    </div>
    <h2 className='text-red-700 text-3xl '>check the gallery page- team page ticket page kinda-done semi-stable</h2>
    <div className="flex flex-wrap">
  <div className="container flex flex-wrap m-auto">
    <Link className="m-2 w-" to="/gallery">
      <div className="bg-[url('/eventimages/IMG_3267.jpg')] bg-no-repeat bg-cover bg-center flex flex-col  justify-center  relative rounded-xl w-56 h-56">
      <div className='absolute inset-0 rounded-xl bg-green-200 bg-opacity-50 flex flex-col justify-center p-2'>
       <h1 className="text-3xl justify-center text-white font-bold underline mb-10  ">Gallery</h1>
       </div>
      </div>      
    </Link>
    
    <Link className="m-auto " to="/team">
      <div className="bg-[url('/eventimages/432987732_769818475123330_1646760977378195407_n.jpg')] bg-no-repeat bg-cover bg-center flex flex-col  justify-center  relative rounded-xl w-56 h-56">
      <div className='absolute inset-0 rounded-xl bg-yellow-200 bg-opacity-50 flex flex-col justify-center p-2'>
       <h1 className="text-3xl justify-center text-white font-bold underline mb-10  ">Team</h1>
       </div>
      </div>      
    </Link>
    <Link className="m-auto " to="/tickets">
      <div className="bg-[url('eventimages/IMG_3258.jpg')] bg-no-repeat bg-cover bg-center flex flex-col  justify-center  relative rounded-xl w-56 h-56">
      <div className='absolute inset-0 rounded-xl bg-red-200 bg-opacity-50 flex flex-col justify-center p-2'>
       <h1 className="text-3xl justify-center text-white font-bold underline mb-10  ">Tickets</h1>
       </div>
      </div>      
    </Link>
  </div>
</div>

    
    </>
  )
}

export default LandingPage