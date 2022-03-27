import React from 'react';

const Button = ({ text, className }) => {
    return (
        <button
            className={`button ${className}`}
        >
            {text}
            
            <div className="border-right"></div>
            <div className="border-left"></div>
            <div className="triangle"></div>
            <div className="angles"></div>
        </button>
    );
};

export default Button;