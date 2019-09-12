import React from 'react';

function TextareaField({
    id,
    name,
    label,
    isRequired=false,
    isDisabled=false,
    value=''
}) {
    return (
        <div className="field">
            <label className="label" for={id}>{label}</label>
            <textarea 
                name={name ? name : id} 
                id={id} 
                className="input input--textarea" 
                required={isRequired}
                disabled={isDisabled}>
                {value}
            </textarea>
        </div>
    );
}

export default TextareaField;