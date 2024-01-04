import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './components/Search';
import Navigation from './components/Navigation';

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/header" element={<Navigation />} />
      <Route exact path="/search" element={<Search />} />
    </Routes>
  </>
);

export default App;
