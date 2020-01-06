import React from 'react';
import classnames from 'classnames';
import { useHistory } from 'react-router';

function renderBackButton(history) {
    return (
        <button className="back-button" aria-label="Back" onClick={() => history.goBack()}>
            <svg className="icon" aria-hidden="true" focusable="false" viewBox="0 0 20 20">
                <path d="M10 2.5v3.5h7v8h-7v3.5l-7.5-7.5 7.5-7.5z"></path>
            </svg>
        </button>
    );
}

function SiteHeader({
    showBackButton=true
}) {
    const history = useHistory()

    const cssClasses = classnames('site-header', {
        'site-header--with-back-button': showBackButton
    });

    return (
        <header className={cssClasses}>
			<div className="site-header__inner-wrap">
				<div className="logo">Hangman</div>
                { showBackButton ? renderBackButton(history) : null }
			</div>
		</header>
    );
}

export default SiteHeader;