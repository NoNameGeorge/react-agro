import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login, Map } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
};

export default App;