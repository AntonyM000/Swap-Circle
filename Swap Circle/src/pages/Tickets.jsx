import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import ScaleLoader from 'react-spinners/ScaleLoader';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Tickets = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalSum, setTotalSum] = useState(0);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const conskey=("dKhVna8Lx6zbQoKJhRrrMsT0wojpT5YM")
const conssecret=("QMxBvwel/jA8AkW9QCFMzsRF0+0=")
let authToken;
let  fon="0700000000";
let amont="1";
let orderTrackingId;
let statusCode;

const [products] = useState([
  { id: 1, name: 'SwapMeet EarlyBird Tickets', price: 850, date:'July 29, 2024 - 9:00AM', venue:'Nairobi Street Kitchen', img:'/ticketimage1.jpg' },
  { id: 2, name: 'SwapMeet Individual Ticket', price: 1000, date:'July 29, 2024 - 9:00AM', venue:'Nairobi Street Kitchen', img:'/ticketimage2.jpg' },
  { id: 3, name: 'SwapMeet Group Ticket', price: 4500, date:'July 29, 2024 - 9:00AM', venue:'Nairobi Street Kitchen', img:'/ticketimage3.jpg' },
  { id: 4, name: 'SwapMeet Vendor Ticket', price: 3000, date:'July 29, 2024 - 9:00AM', venue:'Nairobi Street Kitchen', img:'/ticketimage4.jpg' },
]);



const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
  const itemIndex = cartItems.findIndex(item => item.id === product.id);
  if (itemIndex > -1) {
    const updatedCartItems = cartItems.map((item, index) =>
      index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  } else {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  }
};

const removeFromCart = (id) => {
  const updatedCartItems = cartItems
    .map(item => (item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item))
    .filter(item => item.quantity > 0);
  setCartItems(updatedCartItems);
};

const getTotalQuantity = () => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};


const getTotalSum = () => {
  return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
};

useEffect(() => {
  setTotalSum(getTotalSum());
}, [cartItems]);



  async function getAuth(){
    setLoading(true);
  try{
    const response = await fetch ("https://pay.pesapal.com/v3/api/Auth/RequestToken",{
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({"consumer_key":conskey,"consumer_secret":conssecret, })
    });

         const result =await response.json();
        //  console.log(result.token)
        //  console.log(result.message)

        authToken = result.token
        // res.status(200).send(result)
        IpnUrl()
}catch(error){
    console.log(`Your error is ${error}`)
}
}

async function IpnUrl(){
  setLoading(true);

try{
    
    const response = await fetch ("https://pay.pesapal.com/v3/api/URLSetup/RegisterIPN",{
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
            "Authorization":`Bearer ${authToken}`
        },
        body:JSON.stringify({"url":"https://swap-circle.vercel.app/", "ipn_notification_type":"POST" })
    });
    

    const result =await response.json();
      // console.log(result)
    getRegisteredIPNsEndpoint()
  
}catch(error){
    console.log(`Your error is ${error}`)
}
}

async function getRegisteredIPNsEndpoint(){
  setLoading(true);

  try{
      
      const response = await fetch ("https://pay.pesapal.com/v3/api/URLSetup/GetIpnList",{
          method:"GET",
          headers:{                    
              "Authorization":`Bearer ${authToken}`
          },
      });
      

      const result =await response.json();
      // console.log(result)
      const notification_id=(result[0].ipn_id)

       submitOrderRequest(notification_id)
      //  console.log(notification_id)

      
    
  }catch(error){
      console.log(`Your error is ${error}`)
  }
}




async function submitOrderRequest(notification_id){
  setLoading(true);

  try{
      
      const response = await fetch ("https://pay.pesapal.com/v3/api/Transactions/SubmitOrderRequest",{
          method:"POST",
          headers:{                    
              "Authorization":`Bearer ${authToken}`,
              "Accept":"application/json",
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              "id": generateRandomCode(),
              "currency": "KES",
              "amount": amont,
              "description": "Payment description goes here",
              "callback_url": "https://swap-circle.vercel.app/",
              "notification_id":notification_id,
              "billing_address": {                     
                                  "phone_number": '0700000000',
                                     
                                 }
                              })

      });
      

      const result =await response.json();
      orderTrackingId=(result.order_tracking_id)
      // return (orderTrackingId);
      let redirectUrl=result.redirect_url;
      console.log=(result.redirect_url);
      window.location.href=redirectUrl;
  }catch(error){
      console.log(`Your error is ${error}`)
  }finally {
  }//  console.log(notification_id)

}



function generateRandomCode() {
  const min = 1000000;
  const max = 9999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const code = 'ABC' + randomNumber.toString();
  return code;
}




// app.post("/checkPayment",async(req,res)=>{
  async function GetTransactionStatusEndpoint(){
  try
  {
      const response = await fetch (`https://pay.pesapal.com/v3/api/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`,{
      method:'GET',
      headers:{
          "Authorization":`Bearer ${authToken}`,
          "Accept":"application/json",
          "Content-Type":"application/json"
      }
      
  })
     

      const result =await response.json();
      statusCode= result.status_code.text
      // console.log(result)
      console.log(statusCode)    
      console.log(result.payment_status_description)       
      // res.sendStatus(200).send(result.status_code)
      // .send(result.payment_status_description);
      // res.send.status(200).send(result.status_code)
      // res.status(200).send(result) //deprecated
                     

      
  }catch(error){
      console.log(`Error${error}`)

  }

}


  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 mb-4 bg-white text-black shadow-2xl float-right p-1 m-1 bg- rounded-lg flex justify-center">
      Checkout<LuShoppingBag className='m-1'/><label className="rounded-3xl w-6 justify-center text-white bg-black ml-1">
          {getTotalQuantity()}
        </label>
      </Button>
      {/* <button className="">hjh
        
      </button> */}
{/* 
        
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Swap Shop</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </Offcanvas.Body>
      </Offcanvas> */}

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Swap Shop</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center mb-4">
                <img src={item.img} alt={item.name} className="w-16 h-16 mr-4" />
                <div className="flex-1">
                  <h5 className="font-bold">{item.name}</h5>
                  <p className="text-slate-500">Quantity: {item.quantity}</p>
                  <p className="text-slate-500">Total: Ksh.{item.quantity * item.price}</p>
                </div>
                <button
                  className="p-1 bg-red-500 text-white rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 font-bold">
            Total Sum: Ksh.{getTotalSum()}
          </div>
          {loading ? (
        <div className='flex justify-center'>
          <ScaleLoader />
        </div>
      ) : (
        <button onClick={getAuth} className='shadow-2xl p-1 m-1 bg-red-500 text-white rounded  flex justify-center'>
          Checkout
        </button>
      )}
      <button
      onClick={handleClose}
      className='mt-2 p-1 bg-white text-black border-2 border-black rounded flex justify-center'
    >
      Continue Shopping
    </button>

        </Offcanvas.Body>
      </Offcanvas>


{/* <div>
      <h1>Shopping Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div> */}

    <div className='w-full flex justify-around mb-3'>
        <NavLink className='border-5 p-1 rounded-3xl'>All</NavLink>
        <NavLink className='border-5 p-1 rounded-3xl'>Swapping Event</NavLink>
        {/* <NavLink className='border-5 p-1 rounded-3xl'>Swap Tokens</NavLink> */}
    </div>


    <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div key={product.id} className="m-4 rounded-3xl">
            <div className="bg-slate-100 rounded-t-xl bg-no-repeat w-48 bg-cover container">
              <div className="container-xl">
                <img src={product.img} alt="" className="w-48 h-40" />
              </div>
            </div>

            <div className="container-xl w-48 rounded-b-xl flex flex-col shadow">
              <h5 className="text-slate-500 text-xs">{product.date}</h5>
              <h3 className="font-bold">{product.name}</h3>
              <h5 className="text-slate-500 text-sm">Ksh.{product.price}</h5>

              <div className="flex">
                <CiLocationOn />
                <h5 className="text-slate-500 text-xs">{product.venue}</h5>
              </div>
              <button
                className="p-1 m-1 mb-2 bg-black text-white rounded-lg shadow-2xl flex justify-center"
                onClick={() => addToCart(product)}
              >
                <LuShoppingBag className="mt-1 mr-1" />
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

      
{/* <div className="flex flex-wrap justify-center ">
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
        <button onClick={getAuth} className='shadow-2xl p-1 m-1 bg-white rounded-lg  flex justify-center '>Checkout<label className='rounded-3xl w-6 justify-center text-white bg-black ml-1'>{item.quantity}</label></button>
</div>
       </div>
       <div className=' m-4 rounded-3xl '>
         <div className=" bg-[url('/eventimages/432935191_741126114825125_4144358458579219024_n.jpg')] rounded-t-xl  bg-no-repeat  w-48 bg-cover   container  "> 
         <div className="container-xl   ">
        
            <img src="/eventimages/432935191_741126114825125_4144358458579219024_n.jpg" alt="" className=' ' />
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

</div> */}



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