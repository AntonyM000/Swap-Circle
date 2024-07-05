import React from 'react';

const Logo = ({ isHome }) => {
  const homeClass = isHome ? 'w-full justify-center flex' : '';

  return (
    <>
      <div className={homeClass}>
        <img src={"/SwapLogo.png"} alt="Swap Circle" className='h-20 w-24' />
      </div>
    </>
  );
}

export default Logo;
