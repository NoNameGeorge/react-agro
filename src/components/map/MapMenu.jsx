import React from 'react';

import Logo from './../Logo'
import Button from './../Button'

import bell from './../../assets/bell.png'
import user from './../../assets/user.png'
import setting from './../../assets/setting.png'
import chartLine from './../../assets/chart-line.png'
import note from './../../assets/note.png'
import lifeRing from './../../assets/life-ring.png'
import map from './../../assets/map.png'

const MapMenu = () => {
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

                    <div className="item-title">
                        <img src="" alt="" className="item-title__image" />
                        <span>Мои поля</span>
                        <img src="" alt="" className="item-title__image" />
                    </div>


                    <Button
                        className='item-button fill'
                        text='+ Добавить поле'
                    />

                </div>
            </div>
        </>
    );
};

export default MapMenu;