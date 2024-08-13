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
    <div className='flex w-full flex-col'>
   



    <div className="relative w-full h-screen bg-cover bg-center md:bg-none md:flex ">
      {/* Background image for small screens */}
      <div className="md:hidden bg-cover bg-center w-full h-full" style={{ backgroundImage: 'url(/landingCarouselOne.jpg)' }}></div>
      
      {/* Images for medium and larger screens */}
      <div className="hidden md:flex w-full h-full ">
        <img src="/landingCarouselOne.jpg" alt="Swap Circle" className=" w-1/3  h-full object-cover"/>
        <img src="eventimages\432930606_1153719575725280_5362929331748620162_n.jpg" alt="Image 2" className="border-l-8  w-1/3 h-full object-cover"/>
        <img src="eventimages\IMG_3229.jpg" alt="Swap Circle" className="w-1/3 border-l-8 border-white h-full object-cover"/>
      </div>

      {/* Overlay content */}
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col w-full justify-center p-2'>
        <h1 className="text-white font-bold underline mb-10 font-gliker text-4xl">SUSTAINABLE FASHION THROUGH SWAPPING</h1>
        <h2 className='text-white font-gliker'>Elevate your wardrobe while saving the planet</h2>
        <button onClick={ticketnavigate} className="text-white font-gliker border-2 rounded-3xl flex p-1 mb-3 mt-12 w-3/12">
          See Events
          <GoArrowUpRight/>
        </button>
      </div>
    </div>
{/* a
            b
    <div className="bg-[url('/landingCarouselOne.jpg')] w-full h-96 p-2 bg-no-repeat bg-cover bg-center flex flex-col  justify-center  relative">
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-2'>

       <h1 className=" text-white font-bold underline mb-10 text-4xl ">SUSTAINABLE FASHION THROUGH SWAPPING</h1>
       <h2 className='text-white'>Elevate your wardrobe while saving the planet</h2>
      <button onClick={ticketnavigate} className="text-white border-2 rounded-3xl flex p-1 mb-3 mt-12 w-3/12">See Events
        <GoArrowUpRight/>  
       </button>
      </div>
       
    </div> */}
    <div className=' flex w-full ml-auto mr-auto'>
      <div className='container place-content-center'>
          {/* <h1 className="text-3xl text-center m-4">Elevate your wardrobe while saving the planet</h1> */}
          <h3 className='w-10/12 font-medium text-lg mt-4 mx-auto '>Events and opportunities  to exchange clothing items with others, creating a circular economy in fashion.Join us at Swap Circle, where like-minded individuals come together to share, swap, and connect. Our vibrant community is your go-to platform for swapping clothing items.
          </h3>
          <h3 className='w-10/12 font-semibold text-lg  mx-auto '>Experience the thrill of finding hidden treasures, giving new life to pre-loved items, and reducing your environmental impact. Join the Swap Circle movement today </h3>
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
            <div className="bg-[url('/eventimages/IMG_3258.jpg')] bg-no-repeat bg-cover bg-center flex flex-col  justify-center  relative rounded-xl w-56 h-56">
            <div className='absolute inset-0 rounded-xl bg-red-200 bg-opacity-50 flex flex-col justify-center p-2'>
            <h1 className="text-3xl justify-center text-white font-bold underline mb-10 ">Tickets</h1>
            </div>
            </div>      
          </Link>
        </div>
    </div>

{/*SwapRules*/}
<div className="  shadow p-3 flex justify-center mt-3 ml-auto mr-auto  rounded flex-col text-center">
  <h1 className="font-bold">About Swapmeets</h1>
  {/* <div className="">During swapmeets we bring together clothes for swapping. */}
  {/* </div> */}
    <div className='flex flex-col'>
       <div className=' container max-w-screen-md mt-2 bg-green-400 rounded flex flex-col justify-center mx-auto text-center  p-2'><img src="hangar1.png" alt="" className='w-14 mr-auto'/>Bought your ticket online? Get your code scanned at the registration desk or buy your ticket at the gate then head over to the token desk to submit your swapping items and receive your swapping tokens that you can redeem.</div>
       <div className=' container max-w-screen-md mt-2 bg-green-400 rounded flex flex-col justify-center mx-auto text-center  p-2'><img src="hangar2.png" alt="" className='w-24 ml-auto '/>Use your tokens to get items you love. Pass by the creative corner to DIY your swappped items with Tie & Dye, get a ripped look or create an inclusive fashion scene with fun paper macge, modelling clay and more!.</div>
       <div className=' container max-w-screen-md mt-2 bg-green-400 rounded flex flex-col justify-center mx-auto text-center  p-2'><img src="hangar3.png" alt="" className='w-32 ml-auto mr-auto'/>Bought your ticket online? Get your code scanned at the registration desk or buy your ticket at the gate then head over to the token desk to submit your swapping items and receive your swapping tokens that you can redeem.</div>

       {/* <div className=' w-52 lg:container-sm  mt-2 bg-yellow-100 rounded flex flex-col justify-center float-left text-center  p-2'><img src="yellowstaredown.png" alt="" className='w-14'/>Step one:Get some tokens(points) awarded to the clothes you bought. The tokens you got will enable you to swap clothes</div>
    <div className="w-52  ml-auto mt-2 bg-yellow-100 rounded flex flex-col justify-center text-center  p-2"><img src="/yellow tap.png" alt="" className='w-14' />Step two: You can now walk around and get the apparels you love. We also have vending tables.</div>
    <div className="w-52  ml-auto mt-2 bg-yellow-100 rounded flex flex-col justify-center text-center mr-auto p-2"><img src="/yellowmeditate.png" alt="" className='w-14 ml-auto mr-auto' />Step three: Use the points to check out clothes from the inventory</div> */}
</div>
  {/* <video src="/swap video.mp4" className="ml-auto mr-auto mt-3 w-64 rounded-xl" controls></video> */}

  
  {/* <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/CueNbxHgNws/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/CueNbxHgNws/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/CueNbxHgNws/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by The swap circle (@the_swap_circle)</a></p></div></blockquote> */}
{/* <script async src="//www.instagram.com/embed.js"></script> */}
  <div className='text-sm '>
    <p className='mt-2'>*MAXIMUM OF 8 CLOTHING ITEMS*</p>
  <p className='mt-2'>*NO USED UNDERWEAR*</p>
  <p className='mt-2'>*NO USED HOSIERY*</p>

  <img src="washing-machine_810199.png" alt="" className="w-32 m-auto"/>
  <p className="mt-2 font-bold">ITEMS MUST BE CLEAN & IN GOOD CONDITION</p>
  <p className='mt-2'>*NO UNDERARM STAINS OR ODORS*</p>
  <p className="text-xs mt-2 ">We only accept fashion jewelry (costume jewelry) and do not accept fine jewelry.
Fashion jewelry should not be made of precious metals, gemstones, pearls, or diamonds.
We only accept hosiery that are new with tags.</p>
</div>
</div>
<br />
{/* <footer>hbn</footer> */}



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


    
    </div>
  )
}

export default LandingPage