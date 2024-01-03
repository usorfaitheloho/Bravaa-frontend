import React from 'react';
import logo from '../images/logo.png';
import Search from './Search';
import menu from '../images/menu.png';
import cart from '../images/online-shopping.png';
import bell from '../images/bell.png';
import user from '../images/user.png';

const Header = () => (
  <header className="flex flex-wrap items-center justify-between h-16 p-4 md:p-8">
    <div className="">
      <img src={logo} alt="Logo" className="h-[12px] md:h-[20px] lg:h-[20px] w-14 md:w-[100px]" />
    </div>
    <Search />
    <div className="flex items-center space-x-4 ">
      <span className="hidden md:flex">
        <img src={cart} alt="menu" className="w-8 p-2 border rounded-full" />
      </span>
      <span className="hidden md:flex">
        <img src={bell} alt="menu" className="w-8 p-2 border rounded-full" />
      </span>
      <span className="hidden md:flex">
        <img src={user} alt="menu" className="w-8 p-2 border rounded-full" />
      </span>
    </div>
    <span className="justify-center sm:flex md:hidden">
      <img src={menu} alt="menu" className="w-8 p-2 border rounded-full" />
    </span>
  </header>

);

export default Header;
