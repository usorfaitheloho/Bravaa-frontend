import React from 'react';
import search from '../images/search.png';

const Search = () => (
  <div className="relative flex items-center justify-center mx-4">
    <input
      type="text"
      placeholder="Search..."
      className="w-56 p-1 pl-10 placeholder-green-700 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 md:w-[40rem] md:h-[2.5rem] placeholder:text-sm"
    />
    <div className="absolute text-gray-500 left-4 top-3">
      <img src={search} className="md:h-[20px] p-0.5" alt="search" />
    </div>
  </div>
);

export default Search;
