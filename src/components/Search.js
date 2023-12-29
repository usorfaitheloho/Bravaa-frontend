import React from 'react';
import search from '../images/search.png';

const Search = () => (
  <div className="relative flex items-center">
    <input
      type="text"
      placeholder="Searching..."
      className="w-56 p-1 pl-8 placeholder-green-700 border border-gray-300 rounded-full pl pl- pl-8pr-12 pr- w- focus:outline-none focus:border-blue-500 lg:w-2/5 placeholder:text-sm"
    />
    <div className="absolute text-gray-500 left-2 top-2">
      <img src={search} className="md:h-[20px] p-1" alt="search" />
    </div>
  </div>
);

export default Search;
