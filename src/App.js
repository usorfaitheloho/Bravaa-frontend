import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/header" element={<Header />} />
    </Routes>
  </>
);

export default App;
