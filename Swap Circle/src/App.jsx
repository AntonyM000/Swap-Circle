import React from 'react'
import MainLayout from './layout/MainLayout';
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Tickets from './pages/Tickets';

const router = createBrowserRouter(
  createRoutesFromElements(
   
<>
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<LandingPage/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/team' element={<Team/>}/>
    <Route path='/tickets' element={<Tickets/>}/>


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