import React from 'react';

const Input = ({ className, text, isPassword, image }) => {
    const [visible, setVisible] = React.useState(false)
    const [value, setValue] = React.useState('')

    return (
        <div className={`input-wrapper ${className}`}>
            <input
                className="input"
                type={(isPassword && !visible) ? 'password' : 'text'}
                placeholder={text}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <img
                alt=""
                className="input-image"
                src={image}
            />
            {
                isPassword &&
                <div
                    className="input-show"
                    onClick={() => setVisible(!visible)}
                >
                    Показать
                </div>
            }
        </div>
    );
};

export default Input;