import React from 'react';

import Logo from './../Logo'
import Button from '../button/Button'

import bell from './../../assets/bell.png'
import user from './../../assets/user.png'
import setting from './../../assets/setting.png'
import chartLine from './../../assets/chart-line.png'
import note from './../../assets/note.png'
import lifeRing from './../../assets/life-ring.png'
import map from './../../assets/map.png'
import editImage from './../../assets/Icon Edit.png'
import searchImage from './../../assets/Icon Search.png'

import List from '../List';
import Polygons from '../Polygons';

const MapMenu = ({ onClick }) => {
    const categories = ['Все категории', 'Категория 1', 'Категория 2', 'Категория 3', 'Категория 4', 'Категория 5', 'Категория 6', 'Категория 7', 'Категория 8']
    const polygons = [{
        id: '123',
        idMapbox: '',
        name: 'Поле #123',
        emission: true,
        warning: true,
        question: true,
    }, {
        id: '124',
        idMapbox: '',
        type: 'Пшеница твердая',
        name: 'Поле #124',
        warning: true,
    }]

    



    return (
        <>
            <div className="map-menu">
                <Logo />
                <div className="menus">
                    <ul className="menu">
                        <li className='menu__item active'>
                            <img src={map} alt="" className='menu__item-image' />
                            <span>Мои поля</span>
                        </li>
                        <li className='menu__item'>
                            <img src={chartLine} alt="" className='menu__item-image' />
                            <span>Диагностика</span>
                        </li>
                        <li className='menu__item'>
                            <img src={lifeRing} alt="" className='menu__item-image' />
                            <span>Рекомендации</span>
                        </li>
                        <li className='menu__item'>
                            <img src={note} alt="" className='menu__item-image' />
                            <span>Заметки</span>
                        </li>
                    </ul>


                    <ul className="menu menu--line">
                        <li className='menu__item'>
                            <img src={user} alt="" className='menu__item-image' />
                            <span>Профиль</span>
                        </li>
                        <li className='menu__item'>
                            <img src={bell} alt="" className='menu__item-image' />
                            <span>Уведомления 5</span>
                        </li>
                        <li className='menu__item'>
                            <img src={setting} alt="" className='menu__item-image' />
                            <span>Настройки</span>
                        </li>
                    </ul>
                </div>
                <div className="map-menu__border"></div>

                <div className="map-menu__item active">
                    <div>
                        <div className="item-title">
                            <img src={editImage} alt="" className="item-title__image" />
                            <span>Мои поля</span>
                            <img src={searchImage} alt="" className="item-title__image" />
                        </div>
                        <List items={categories} />
                        <Polygons items={polygons} />
                    </div>
                    <Button
                        className='item-button fill'
                        onClick={() => onClick()}
                        text='+ Добавить поле'
                        isFill
                    />
                </div>
            </div>
        </>
    );
};

export default MapMenu;