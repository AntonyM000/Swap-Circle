import React from 'react'
import images from '../images.json'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import ScaleLoader from 'react-spinners/ScaleLoader';

// To do
// if on mobile phone use the third image CSSContainerRule, if on laptop use the masonry container
const Gallery = () => {
    // images.map((image)=>(
    //     <img src={image.url} key={image.id} image={image}/>
    //     ))
    const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };
    const [loading, setLoading] = React.useState(true);
    const handleImageLoad = () => setLoading(false);
  return (
    <div className='flex flex-col mx-auto text-center '>
    

    <h2 className='text-2xl font-normal font-sans -mt-16 ml-3 mr-3 mb-3'>We value</h2>
    <h1 className=' text-6xl font-bold  m-2'>Community</h1>


    
<div className="rounded-lg m-2 flex justify-center items-center">
  <img src='landingCarouselOne.jpg' alt="landing car" className="rounded-lg max-w-full max-h-full object-contain" style={{ maxWidth: '100%', maxHeight: '50vh' }} />
</div>





      {/* Masonry layout for tablets and laptops */}
      <div className="hidden md:block">
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter={4}>
            {images.map((image) => (
              <img 
                key={image.id}
                src={image.url} 
                alt="" 
                className="rounded-lg"
                loading="lazy" 
                onLoad={handleImageLoad}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* Mobile view */}
      <div className="md:hidden bg-white flex flex-wrap justify-center">
        {images.map((image) => (
          <div key={image.id} className="rounded-lg w-5/12  m-1 flex justify-center items-center">
            <img 
              src={image.url} 
              alt="" 
              className="rounded-lg h-auto w-auto max-w-full max-h-full" 
              loading="lazy" 
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className='w-full flex justify-center items-center mt-4'>
          <ScaleLoader />
        </div>
      )}
    </div>



  )
}

export default Gallery