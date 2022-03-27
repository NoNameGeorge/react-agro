import React from 'react';
import { Link } from 'react-router-dom';

import logo from './../assets/logo.png'

const Logo = ({ className }) => {
    return (
        <div className={`logo-wrapper ${className ? className : ''}`}>
            <Link to='/'>
                <img
                    alt="logo"
                    className='logo'
                    src={logo}
                />
            </Link>
        </div>
    );
};

export default Logo;