import React, {forwardRef} from 'react';
import classnames from 'classnames';

function Button({
    children,
    type='button',
    isDisabled=false,
    isAlt=false,
    cajole=false,
    className,
    value=null,
    onClick
}, ref) {

    const cssClasses = classnames('button', className, {
        'button--alt': isAlt,
        'cajole': cajole
    });

    return (
        <button
            type={type}
            value={value}
            className={cssClasses}
            disabled={isDisabled}
            ref={ref}
            onClick={onClick}
        >{children}</button>
    );
}

export default forwardRef(Button);