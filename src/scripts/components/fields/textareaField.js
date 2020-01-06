import React, {forwardRef} from 'react';

function TextareaField({
    id,
    name,
    label,
    isRequired=false,
    isDisabled=false,
    value='',
    onChange
}, textareaRef) {
    return (
        <div className="field">
            <label className="label" htmlFor={id}>{label}</label>
            <textarea 
                name={name ? name : id} 
                id={id} 
                className="input input--textarea" 
                required={isRequired}
                disabled={isDisabled}
                value={value}
                ref={textareaRef}
                onChange={onChange} />
        </div>
    );
}

export default forwardRef(TextareaField);