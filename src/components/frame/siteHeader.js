import React from 'react';
import classnames from 'classnames';

function renderBackLink(url) {
    return (
        <a href={url} className="back-link" aria-label="Back">
            <svg className="icon" aria-hidden="true" focusable="false" viewBox="0 0 20 20">
                <path d="M10 2.5v3.5h7v8h-7v3.5l-7.5-7.5 7.5-7.5z"></path>
            </svg>
        </a>
    );
}

function SiteHeader({
    backUrl=null
}) {
    const cssClasses = classnames('site-header', {
        'site-header--with-back-link': backUrl
    });

    return (
        <header className={cssClasses}>
			<div className="site-header__inner-wrap">
				<div className="logo">Hangman</div>
                { backUrl ? renderBackLink(backUrl) : null }
			</div>
		</header>
    );
}

export default SiteHeader;