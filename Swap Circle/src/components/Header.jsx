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
    {/* <div className='expand flex w-full  z-10 bg-yellow-800 h-14  place-items-stretch '>
        <NavLink className={linkClass} to='/' >Discover</NavLink>
        <NavLink className={linkClass} to='/gallery' >Gallery </NavLink>
        <NavLink className={linkClass} to='/team' >Team </NavLink>
        <NavLink className={linkClass} to='/tickets' >Tickets </NavLink>
        <NavLink className={linkClass} to='/about' >About </NavLink>
</div> */}
{/* <div className='md:hidden '> */}
        <Navbar expand="sm" className="bg-yellow-800 ">
      <Container>
        <Navbar.Brand href="/" className='font-gliker text-white font-semibold'>Swap Circle</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-white ' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-8">
        
            <Nav.Link href="/" className={linkClass} to="/" >Discover</Nav.Link>
            <Nav.Link href="/Gallery" className={linkClass} to="/gallery">Gallery</Nav.Link >
            <Nav.Link href="/tickets" className={linkClass} to='/tickets' >Tickets </Nav.Link >
            <Nav.Link href="/team" className={linkClass} to='/team' >Team </Nav.Link>
            <Nav.Link href="/about" className={linkClass} to='/about' >About </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
{/* <div> */}
   

        {/* <button className=' p-1 rounded-xl text-white focus:ring-1 focus:ring-red-200 ring-offset-1 m-auto' >About</button> */}
        {/* <button className='border-solid border-2 p-1 rounded-xl border-white  text-white focus:ring-1 focus:ring-red-200 ring-offset-1 m-auto bg-yellow-700' >Events</button> */}

    {/* </div> */}
    </>
  )
}

export default Header