import React from 'react';

import sortImage from './../assets/Icon Sort.png'
import triangleImage from './../assets/Vector.png'

const Categories = ({ items }) => {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [isVisible, setIsVisible] = React.useState(false)

    const handleActiveItem = (itemIndex) => {
        setActiveIndex(itemIndex)
        setIsVisible(false)
    }

    return (
        <div className="list-wrapper">
            <div className="list">
                <div
                    className="list__active-item"
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {items[activeIndex]}
                    <img src={triangleImage} alt="" />
                </div>
                {
                    isVisible &&
                    <div className="list__items">
                        {items.map((item, index) => {
                            if (index !== activeIndex) {
                                return <div
                                    className="list__item"
                                    onClick={() => handleActiveItem(index)}
                                >
                                    {item}
                                </div>
                            }
                        })}
                    </div>
                }
            </div>
            <img
                className='list-image'
                alt=""
                src={sortImage}
            />
        </div>
    );
};

export default Categories;