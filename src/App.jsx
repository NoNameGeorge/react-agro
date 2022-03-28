import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login, Polygons } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/map" element={<Polygons />} />
    </Routes>
  );
};

export default App;