import React from 'react';

import ButtonBorders from './ButtonBorders'

import buttonImage from './../../assets/button.png'

const Button = ({ text, className, isFill, onClick }) => {
    return (
        <button
            className={`button ${className}`}
            onClick={onClick}
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