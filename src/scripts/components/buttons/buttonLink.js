import React, {forwardRef} from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

function ButtonLink({
    children,
    to="",
    isAlt=false,
    cajole=false,
    className
}, ref) {

    const cssClasses = classnames('button', className, {
        'button--alt': isAlt,
        'cajole': cajole,
    });

    return (
        <Link
            to={to}
            className={cssClasses}
            innerRef={ref}
        >{children}</Link>
    );
}

export default forwardRef(ButtonLink);