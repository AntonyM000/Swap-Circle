import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = ({ isHome }) => {
  const homeClass = isHome ? 'w-full justify-center flex' : '';

  return (
    <>
    <NavLink  to="/">
      <div className={homeClass}>
        <img src={"/SwapLogo.png"} alt="Swap Circle" className=' w-20' />
      </div>
    </NavLink>
    </>
  );
}

export default Logo;
