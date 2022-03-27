import React from 'react';

import Button from './Button';
import Input from './Input';

import mailImage from './../assets/mail.png'
import passwordImage from './../assets/key.png'
import InputCheckbox from './InputCheckbox';

const Form = () => {
    const [activeTitle, setActiveTitle] = React.useState(0)
    const titles = ['Вход', 'Регистрация']


    return (
        <div className='form-wrapper'>
            <div className="form-inner">
                <div className="form-image" />
                <div className="form">
                    <div className="form-borders">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="form-titles">
                        {titles.map((title, index) => {
                            const isActive = index === activeTitle ? 'active' : ''

                            return <div 
                                key={title}
                                className={`title ${isActive}`}
                                onClick={() => setActiveTitle(index)}
                            >
                                {title}
                            </div>
                        })}
                    </div>

                    <Input
                        text='Email...'
                        image={mailImage}
                    />
                    <Input
                        text='Password...'
                        image={passwordImage}
                        isPassword
                    />
                    <InputCheckbox
                        text='Запомнить меня'
                        id='login-check'
                    />
                    <Button text='Войти' className='form-button' />
                    <div className="form-forget">Забыли пароль?</div>
                </div>
            </div>
        </div>
    );
};

export default Form;