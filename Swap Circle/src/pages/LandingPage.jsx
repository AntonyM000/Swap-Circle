import React from 'react'
import Gallery from './Gallery'
 import { GoArrowUpRight } from 'react-icons/go'
import { Link, useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate=useNavigate()
  const ticketnavigate=()=>{
    navigate('/tickets')
  }
  // const isHome = true;
  return (
    <>
   



    <div className="relative w-full h-screen bg-cover bg-center md:bg-none md:flex md:space-x-4">
      {/* Background image for small screens */}
      <div className="md:hidden bg-cover bg-center w-full h-full" style={{ backgroundImage: 'url(/landingCarouselOne.jpg)' }}></div>
      
      {/* Images for medium and larger screens */}
      <div className="hidden md:flex w-full h-full space-x-4">
        <img src="/landingCarouselOne.jpg" alt="Image 1" className="w-1/3 h-full object-cover"/>
        <img src="eventimages\432930606_1153719575725280_5362929331748620162_n.jpg" alt="Image 2" className="w-1/3 h-full object-cover"/>
        <img src="eventimages\IMG_3229.jpg" alt="Image 3" className="w-1/3 h-full object-cover"/>
      </div>

      {/* Overlay content */}
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-2'>
        <h1 className="text-white font-bold underline mb-10 text-4xl">SUSTAINABLE FASHION THROUGH SWAPPING</h1>
        <h2 className='text-white'>Elevate your wardrobe while saving the planet</h2>
        <button onClick={ticketnavigate} className="text-white border-2 rounded-3xl flex p-1 mb-3 mt-12 w-3/12">
          See Events
          <GoArrowUpRight/>
        </button>
      </div>
    </div>
//
<div className='mt-16'>dsdsada</div>
    
    <div className="bg-[url('/landingCarouselOne.jpg')] w-full h-96 p-2 bg-no-repeat bg-cover bg-center flex flex-col  justify-center  relative">
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-2'>

       <h1 className=" text-white font-bold underline mb-10 text-4xl ">SUSTAINABLE FASHION THROUGH SWAPPING</h1>
       <h2 className='text-white'>Elevate your wardrobe while saving the planet</h2>
      <button onClick={ticketnavigate} className="text-white border-2 rounded-3xl flex p-1 mb-3 mt-12 w-3/12">See Events
        <GoArrowUpRight/>  
       </button>
      </div>
       
    </div>
    <div className=' flex w-full'>
      <div className='container place-content-center'>
          <h1 className="text-3xl text-center m-4">Elevate your wardrobe while saving the planet</h1>
          <h3 className='w-10/12 text-center'>Events and opportunities  to exchange clothing items with others, fostering a circular economy in fashion.Discover a world of endless possibilities at Swap Circle, where like-minded individuals come together to share, trade, and connect. Our vibrant community is your go-to platform for swapping everything from fashion and electronics to home goods and collectibles.
          </h3>
          <h3 className='w-10/12 text-center'>Experience the thrill of finding hidden treasures, giving new life to pre-loved items, and reducing your environmental impact. Join the Swap Circle movement today and unlock a sustainable and exciting way to refresh your life!</h3>
      </div>
    </div>

{/* ticket Button or not*/}

{/* Clickpicsection */}
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
{/* socials section */}
{/* blog section */}
    {/* <div className="align-middle w-1/2 ">
      <h3 className='font-extrabold w-full text-2xl align-middle ml-auto mr-auto'>Blog</h3>
      <div className="container">
        <div className='flex w-full flex-col'>
          <img src="eventimages\IMG_1604.jpg" alt=""className='rounded-xl' />
          <h3 className="font-bold ">ESCAPE THE ORDINARY: WHY HELL’S GATE BIKING FEST 2024 SHOULD BE YOUR NEXT ADVENTURE!</h3>
          <p className="">Are you a festival lover, nature enthusiast, adventure junkie, or seeking a unique Kenyan adventure with your crew? Are you craving an epic escape with a healthy dose of community spirit? Look no further than the Hell’s Gate Biking Fest 2024…</p>
          <button className='bg-red-200 font-white rounded w-1/4 ml-32'>Read More</button>
        </div>
      </div>
    </div> */}


    
    </>
  )
}

export default LandingPage