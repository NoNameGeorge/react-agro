import React from 'react';

import questionImage from './../assets/question.png'
import warmImage from './../assets/warn.png'
import dieImage from './../assets/die.png'

import polygon from './../assets/Vector 4.png'

const Polygons = ({ items }) => {
    return (
        <div className="polygons">
            {items.map(item => {
                return <div
                    key={item.id}
                    className="polygons__item"
                >
                    <img
                        src={polygon}
                        alt=""
                        className='polygons__item-image'
                    />
                    <div>
                        <div className="polygons__item-name">{item.name}</div>
                        {
                            item.type &&
                            <div className="polygons__item-type">{item.type}</div>
                        }
                        {
                            item.question &&
                            <div className='polygons__item-question polygons__item-icons'>
                                <img src={questionImage} alt="" />
                                <span>Есть совет</span>
                            </div>
                        }
                        {
                            item.emission &&
                            <div className='polygons__item-emission polygons__item-icons'>
                                <img src={dieImage} alt="" />
                                <span>Выброс</span>
                            </div>
                        }
                        {
                            item.warning &&
                            <div className='polygons__item-warning polygons__item-icons'>
                                <img src={warmImage} alt="" />
                                <span>Засыхает</span>
                            </div>
                        }

                    </div>
                    <div className="polygons__item-area">0.03</div>
                </div>
            })}
        </div>
    );
};

export default Polygons;