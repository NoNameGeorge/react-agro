import React from 'react';
import useDebounce from './../../hooks/use-debounce';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { area } from '@turf/turf'

import dateImage from './../../assets/Icon.png'
import sunImage from './../../assets/sun.png'
import warnImage from './../../assets/warn.png'
import rulerImage from './../../assets/ruler.png'
import minusImage from './../../assets/minus.png'
import plusImage from './../../assets/plus.png'

mapboxgl.accessToken = 'pk.eyJ1Ijoibm5nZW9yZ2UiLCJhIjoiY2wxN3Z2cm5zMGZ2bjNkcDl5cW5ncTc3dSJ9.Nnkj7s2bIsxkX_lQ0dwsRQ';
const weatherAPI = '3cd60311a8475c5f5792d22b55c4c476'

const Map = () => {
    const mapContainer = React.useRef(null);
    const map = React.useRef(null);
    const draw = React.useRef(null);
    const polygonItems = React.useRef([]);
  
    const [lng, setLng] = React.useState(37.44);
    const [lat, setLat] = React.useState(55.85);
    const [zoom, setZoom] = React.useState(9);
    const [weather, setWeather] = React.useState(null)
    // const [polygons, setPolygons] = React.useState([])

    // Обновление погоды, когда происходит фиксация карты (на 0.5 секунд)
    const debouncedLng = useDebounce(lng, 500)
    const debouncedLat = useDebounce(lat, 500)
  
    // Получение погоды по центральным координатам 
    // (иногда не работает из-за ограничения бесплатного API)
    React.useEffect(() => {
      getWeather(lng, lat)
    }, [debouncedLng, debouncedLat])

    const getWeather = (lng, lat) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherAPI}`)
        .then(response => response.json())
        .then(data => {
          setWeather(data)
        })
        .catch(e => console.log('Ошибка - ', e))
    }

    // Создание полей
    // const createArea = (e) => {
    //   const newPolygons = [...polygonItems.current, ...e.features]
    //   polygonItems.current = newPolygons
    // }
  
    // Удаление поля
    // const deleteArea = (e) => {
    //   e.features.forEach(item => {
    //     const newPolygons = polygonItems.current.filter((polygon) => item.id !== polygon.id)
    //     polygonItems.current = newPolygons
    //   })
    // }
     









    
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
    //   map.current.on('draw.create', createArea);
    //   map.current.on('draw.delete', deleteArea);
    //   map.current.on('draw.update', updateArea);
  
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
        <div className='map'>
            <div ref={mapContainer} id="map" className="map-container" />
            <div className="map-info map-info--right">
                <div className="warning">
                    <img src={warnImage} alt="" />
                </div>
                <div className="ruler">
                    <img src={rulerImage} alt="" />
                </div>
                <div className="plus-minus">
                    <div
                        className="plus"
                        onClick={() => setZoom(zoom + 0.5)}
                    >
                        <img src={minusImage} alt="" />
                    </div>
                    <div
                        className="minus"
                        onClick={() => setZoom(zoom - 0.5)}
                    >
                        <img src={plusImage} alt="" />
                    </div>
                </div>
            </div>


            <div className="map-info">
                <div className="date">
                    <span>24 Oct 2021</span>
                    <img src={dateImage} alt="" />
                </div>
                <div className="weather">
                    <img src={sunImage} alt="" />
                    <span>{`${currentTemp} °`}</span>
                </div>
            </div>
        </div>
    );
};

export default Map;