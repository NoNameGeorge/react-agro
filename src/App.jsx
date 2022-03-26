import React from 'react';
import useDebounce from './hooks/use-debounce';

import mapboxgl from 'mapbox-gl';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { area } from '@turf/turf'
import axios from 'axios';

// Api
mapboxgl.accessToken = 'pk.eyJ1Ijoibm5nZW9yZ2UiLCJhIjoiY2wxN3Z2cm5zMGZ2bjNkcDl5cW5ncTc3dSJ9.Nnkj7s2bIsxkX_lQ0dwsRQ';
const weatherAPI = '3cd60311a8475c5f5792d22b55c4c476'




const App = () => {
  const mapContainer = React.useRef(null);
  const map = React.useRef(null);
  const draw = React.useRef(null);
  const polygonItems = React.useRef(null);

  const [lng, setLng] = React.useState(37.44);
  const [lat, setLat] = React.useState(55.85);
  const [zoom, setZoom] = React.useState(9);
  const [weather, setWeather] = React.useState(null)

  // Обновление погоды, когда происходит фиксация карты (на 0.5 секунд)
  const debouncedLng = useDebounce(lng, 500)
  const debouncedLat = useDebounce(lat, 500)

  React.useEffect(() => {
    getWeather(lng, lat)
  }, [debouncedLng, debouncedLat])

  // Получение погоды по центральным координатам 
  // (иногда не работает из-за ограничения бесплатного API)
  const getWeather = (lng, lat) => {
    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherAPI}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setWeather(data)
    //   })
    //   .catch(e => console.log('Ошибка - ', e))
  }

  // Получаение полей из БД + отрисовка
  React.useEffect(() => {
    axios
      .get('http://localhost:3001/polygons')
      .then(response => response.data)
      .then(data => {
        data.forEach(polygon => draw.current.add(polygon))
        polygonItems.current = data
      })
      .catch(e => console.log('Ошибка - ', e))
  }, [])

  // Создание полей + добавление в БД
  const createArea = (e) => {
    axios
      .post('http://localhost:3001/polygons', ...e.features)
      .then(response => response.data)
      .then(data => {
        const newPolygons = [...polygonItems.current, data]
        polygonItems.current = newPolygons
      })
      .catch(e => console.log('Ошибка - ', e))
  }

  // Удаление поля + обновление БД
  const deleteArea = (e) => {
    e.features.forEach(item => {
      axios
        .delete(`http://localhost:3001/polygons/` + item.id)
        .then(() => {
          const newPolygons = polygonItems.current.filter((polygon) => item.id !== polygon.id)
          polygonItems.current = newPolygons
        })
        .catch(e => console.log('Ошибка - ', e))
    })
  }

  // Отрисовка карты
  React.useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    draw.current = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      },
      defaultMode: 'draw_polygon'
    });

    map.current.addControl(draw.current);
    map.current.on('draw.create', createArea);
    map.current.on('draw.delete', deleteArea);

    getWeather(lng, lat)
  }, []);

  // Обновление координат
  React.useEffect(() => {
    if (!map.current) return;

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  // Перевод погоды в градусы Цельсия
  const currentTemp = weather?.main?.temp ? (weather.main.temp - 273.15).toFixed(2) : 'Error'


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
          <div className='calculation-box'>
            <div id="calculated-area"></div>
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