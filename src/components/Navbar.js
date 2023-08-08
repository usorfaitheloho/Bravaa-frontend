import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const nav = [
    {
      id: 1,
      path: '/',
      children: 'Home',
    },
    {
      id: 2,
      path: '/Shop',
      children: 'Buy',
    },
    {
      id: 3,
      path: '/about',
      children: 'About Us',
    },
    {
      id: 2,
      path: '/Contact Us',
      children: 'Contact Us',
    },
  ];

  const navigation = nav.map(({ id, path, children }) => (

    <li key={id}>
      <Link
        to={path}
        end
      >
        {children}
      </Link>
    </li>

  ));

  return (
    <nav>
      <ul>
        {navigation}
      </ul>
    </nav>
  );
};

export default Navbar;
