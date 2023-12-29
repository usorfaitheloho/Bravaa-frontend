import React from 'react';
import logo from '../images/logo.png';

const Header = () => (
  <header>
    <div className="flex items-center justify-between h-16 p-4">
      <img src={logo} alt="Logo" className="h-[12px] md:h-[20px] lg:h-[30px] w-14" />
      <h1> This is the header page </h1>
    </div>
  </header>

);

export default Header;
