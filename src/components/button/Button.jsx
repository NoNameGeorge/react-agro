import React from 'react';

import ButtonBorders from './ButtonBorders'

import buttonImage from './../../assets/button.png'

const Button = ({ text, className, isFill }) => {
    return (
        <button
            className={`button ${className}`}
        >
            {text}
            
            {
                !isFill
                    ? <ButtonBorders />
                    : <img src={buttonImage} alt="" />
            }
        </button>
    );
};

export default Button;