import React from 'react';

const InputCheckbox = ({ text, id }) => {
    const [value, setValue] = React.useState(false)

    return (
        <div className='check-wrapper'>
            <input
                type="checkbox"
                id={id}
                checked={value}
                onChange={(e) => setValue(e.target.checked)}
            />
            <label htmlFor={id} >
                {text}
            </label>
        </div>
    );
};

export default InputCheckbox;