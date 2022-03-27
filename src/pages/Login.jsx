import React from 'react';

import { Form, Logo } from '../components'

const Login = () => {
    return (
        <div className='login-wrapper'>
            <Logo className='logo-wrapper--login' />
            <Form />
        </div>
    );
};

export default Login;