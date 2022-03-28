import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom"

import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import './scss/app.scss' 

import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);