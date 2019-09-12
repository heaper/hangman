import React from 'react';
import classnames from 'classnames';

function Button({
    children,
    type='button',
    isDisabled=false,
    isCajole=false,
    className,
    value=null,
    onClick
}) {
    const cssClasses = classnames('button', className, {
        'cajole': isCajole,
    });

    return (
        <button
            type={type}
            value={value}
            className={cssClasses}
            disabled={isDisabled}
            onClick={onClick}
        >{children}</button>
    );
}

export default Button;