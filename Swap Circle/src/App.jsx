import React from 'react'
import MainLayout from './layout/MainLayout';
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Tickets from './pages/Tickets';
import About from './pages/About';
import './styles/global.css';

const router = createBrowserRouter(
  createRoutesFromElements(
   
<>
{/* add gliker  */}
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<LandingPage/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/team' element={<Team/>}/>
    <Route path='/tickets' element={<Tickets/>}/>
    <Route path='/about' element={<About/>}/>



  </Route>
    
</>

)
);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App