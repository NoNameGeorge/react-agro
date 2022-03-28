import React from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';
import { MapMenu, Map} from '../components';

const Polygons = () => {
  return (
    <div className='map-wrapper'>
      <MapMenu />
      <Map />
    </div>
  );
};

export default Polygons;