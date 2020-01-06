import React, {forwardRef} from 'react';

function TextField({
    id,
    name,
    label,
    type='text',
    isRequired=false,
    isDisabled=false,
    value='',
    onChange
}, inputRef) {

    return (
        <div className="field">
            <label className="label" htmlFor={id}>{label}</label>
            <input 
                name={name ? name : id} 
                id={id} 
                type={type}
                className="input input--text" 
                required={isRequired}
                disabled={isDisabled}
                value={value}
                ref={inputRef}
                onChange={onChange}
            />
        </div>
    );
}

export default forwardRef(TextField);