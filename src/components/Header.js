import React from 'react';
import logo from '../images/logo.png';
import Search from './Search';
import menu from '../images/menu.png';

const Header = () => (
  <header>
    <div className="flex items-center justify-between h-16 p-4">
      <img src={logo} alt="Logo" className="h-[12px] md:h-[20px] lg:h-[30px] w-14" />
      <Search />
      <img src={menu} alt="menu" className="w-8 p-2 border rounded-full" />
    </div>
  </header>

);

export default Header;
