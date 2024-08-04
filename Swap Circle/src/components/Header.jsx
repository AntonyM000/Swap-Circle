import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  


  const linkClass=({isActive})=>(isActive ? 'm-auto rounded-xl text-white ring-1 ring-white ring-offset-1 p-1':'m-auto rounded-xl text-white p-1')
  return (
    <>
    <div className='hidden md:flex w-full z-10 bg-yellow-800 h-14 place-items-stretch'>
    <NavLink to="/" className='font-gliker text-lg m-auto text-white '>Swap Circle</NavLink>

  <NavLink className={linkClass} to='/'>Discover</NavLink>
  <NavLink className={linkClass} to='/gallery'>Gallery</NavLink>
  <NavLink className={linkClass} to='/team'>Team</NavLink>
  <NavLink className={linkClass} to='/tickets'>Tickets</NavLink>
  {/* <NavLink className={linkClass} to='/about'>About</NavLink> */}
</div>

{/* This Navbar will be visible only on mobile devices */}
<Navbar expand="sm" className="bg-yellow-800 md:hidden">
  <Container>
    <Navbar.Brand href="/" className='font-gliker text-white font-semibold'>Swap Circle</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-white ' />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto gap-8">
        <Nav.Link><NavLink  className='text-white font-gliker' to="/">Discover</NavLink></Nav.Link>
        <Nav.Link><NavLink  className='text-white font-gliker' to="/gallery">Gallery</NavLink></Nav.Link>
        <Nav.Link><NavLink  className='text-white font-gliker' to='/tickets'>Tickets</NavLink></Nav.Link>
        <Nav.Link><NavLink  className='text-white font-gliker' to='/team'>Team</NavLink></Nav.Link>
        {/* <Nav.Link href="/about" className='text-white font-gliker' to='/about'>About</Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   

        {/* <button className=' p-1 rounded-xl text-white focus:ring-1 focus:ring-red-200 ring-offset-1 m-auto' >About</button> */}
        {/* <button className='border-solid border-2 p-1 rounded-xl border-white  text-white focus:ring-1 focus:ring-red-200 ring-offset-1 m-auto bg-yellow-700' >Events</button> */}

    {/* </div> */}
    </>
  )
}

export default Header