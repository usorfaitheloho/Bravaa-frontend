import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Search from './components/Search';

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/header" element={<Header />} />
      <Route exact path="/search" element={<Search />} />
    </Routes>
  </>
);

export default App;
