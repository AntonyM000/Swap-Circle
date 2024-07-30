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

       <h1 className=" text-white font-bold underline mb-10 text-4xl ">SUSTAINABLE FASHION THROUGH SWAPPING</h1>
       <h2 className='text-white'>Elevate your wardrobe while saving the planet</h2>
      <button className="text-white border-2 rounded-3xl flex p-1 mb-3 mt-12 w-3/12">See Events
        <GoArrowUpRight/>  
       </button>
      </div>
       
    </div>
    <div className=' flex w-full'><div className='container place-content-center'>
      <h1 className="text-3xl m-4">Elevate your wardrobe while saving the planet</h1>
      <h3 className='w-10/12'>Events and opportunities  to exchange clothing items with others, fostering a circular economy in fashion.Discover a world of endless possibilities at Swap Circle, where like-minded individuals come together to share, trade, and connect. Our vibrant community is your go-to platform for swapping everything from fashion and electronics to home goods and collectibles.
      </h3>
    <p>Experience the thrill of finding hidden treasures, giving new life to pre-loved items, and reducing your environmental impact. Join the Swap Circle movement today and unlock a sustainable and exciting way to refresh your life!</p>
    </div>
    </div>
    {/* <h2 className='text-red-700 text-3xl '>check the gallery page- team page ticket page kinda-done semi-stable</h2> */}
    <div className="flex flex-wrap">
  <div className="container flex flex-wrap mt-4 ml-auto mr-auto">
    <Link className="ml-1 mt-3" to="/gallery">
      <div className="bg-[url('/eventimages/IMG_3267.jpg')] bg-no-repeat bg-cover bg-center flex flex-col  justify-center  relative rounded-xl w-56 h-56">
      <div className='absolute inset-0 rounded-xl bg-green-200 bg-opacity-50 flex flex-col justify-center p-2'>
       <h1 className="text-3xl justify-center text-white font-bold underline mb-10  ">Gallery</h1>
       </div>
      </div>      
    </Link>
    
    <Link className="ml-5 mt-3 " to="/team">
      <div className="bg-[url('/eventimages/432987732_769818475123330_1646760977378195407_n.jpg')] bg-no-repeat bg-cover bg-center flex flex-col  justify-center  relative rounded-xl w-56 h-56">
      <div className='absolute inset-0 rounded-xl bg-yellow-200 bg-opacity-50 flex flex-col justify-center p-2'>
       <h1 className="text-3xl justify-center text-white font-bold underline mb-10  ">Team</h1>
       </div>
      </div>      
    </Link>
    <Link className="ml-9 mt-3 " to="/tickets">
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