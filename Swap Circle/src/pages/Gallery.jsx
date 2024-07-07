import React from 'react'
import images from '../images.json'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Gallery = () => {
    // images.map((image)=>(
    //     <img src={image.url} key={image.id} image={image}/>
    //     ))
    const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };
    
  return (
    <div className='flex flex-col mx-auto text-center '>
    

    <h2 className='text-2xl font-normal font-sans -mt-16 ml-3 mr-3 mb-3'>We value</h2>
    <h1 className=' text-6xl font-bold  m-2'>Community</h1>


    
<div className="rounded-lg m-2 flex justify-center items-center">
  <img src='landingCarouselOne.jpg' alt="" className="rounded-lg max-w-full max-h-full object-contain" style={{ maxWidth: '100%', maxHeight: '50vh' }} />
</div>



<ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
  <Masonry gutter={4}>
    {images.reverse().map((image) => (
      <img className='rounded-xl' src={image.url} />
    ))}
  </Masonry>
  </ResponsiveMasonry>

    {/* <div className='bg-white flex flex-wrap justify-center'>
        {images.map((image)=>(            

        <div className="rounded-lg m-2 flex justify-center items-center">
        <img src={image.url} alt="" className="rounded-lg max-w-full max-h-full object-contain" style={{ maxWidth: '100%', maxHeight: '50vh' }} />
        </div>



          //   <div className=" rounded-lg w-4/12 h-1/5 m-2 flex justify-center items-center"> 
          //  <img src={image.url} alt="" className=" rounded-lg  h-auto w-auto max-w-full max-h-full  " />
          //    </div>
        ))}
        
    </div> */}



    <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                {/* <img src='eventimages/432935191_741126114825125_4144358458579219024_n.jpg'></img> */}
                
                {/* <div className="text-gray-600 my-2">{job.type}</div> */}
                {/* <h3 className="text-xl font-bold">{job.title}</h3> */}
              </div>
{/* 
              <div className="mb-5">
               {description}
              </div>
              <button onClick={()=> setShowFullDescription((prevState)=>!prevState) } 
              className="text-indigo-500 mb-5 hover:text-indigo-600">
                {showFullDescription ? 'Less':'More'}</button> */}

              {/* <h3 className="text-indigo-500 mb-2">{job.salary}/ Year</h3> */}

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                {/* <div className="text-orange-700 mb-3">
                   <FaMapMarker className='inline text-lg mb-1 mr-1'/>
                  {job.location} 
                </div> */}
                {/* <Link
                  to={`/job/${job.id}`}
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                 Read More
                </Link> */}
              </div>
            </div>
          </div>
    </div>
  )
}

export default Gallery