import React from 'react';
import useDebounce from './hooks/use-debounce';

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoibm5nZW9yZ2UiLCJhIjoiY2wxN3Z2cm5zMGZ2bjNkcDl5cW5ncTc3dSJ9.Nnkj7s2bIsxkX_lQ0dwsRQ';

const weatherAPI = '3cd60311a8475c5f5792d22b55c4c476'


const App = () => {
  const mapContainer = React.useRef(null);
  const map = React.useRef(null);
  const [lng, setLng] = React.useState(37.4376);
  const [lat, setLat] = React.useState(55.8386);
  const [zoom, setZoom] = React.useState(12);
  const [weather, setWeather] = React.useState(null)

  const debouncedLng = useDebounce(lng, 500)
  const debouncedLat = useDebounce(lat, 500)

  React.useEffect(() => {
    getWeather(lng, lat)
  }, [debouncedLng, debouncedLat])

  const getWeather = (lng, lat) => {
    console.log(123)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherAPI}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setWeather(data)
      })
  }

  React.useEffect(() => {
    if (map.current) return; 

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    getWeather(lng, lat)
  }, []);


  React.useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);


  const currentTemp = weather?.main?.temp ? weather.main.temp - 273.15 : 'Error'

  return (
    <div className='map-wrapper'>
      <div className="map-inner">
        <div className="map-menu">

        </div>
        <div className="map-menu-item">

        </div>

        <div className='map'>
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} | Temperature: {currentTemp}
          </div>
          <div ref={mapContainer} id="map" className="map-container" />
        </div>
      </div>


      {/* <div className="login-wrapper">
        <div className="logo-wrapper">
          <img className="logo" src={logo} alt='Logo' />
        </div>
      </div> */}
    </div>
  );
};

export default App;