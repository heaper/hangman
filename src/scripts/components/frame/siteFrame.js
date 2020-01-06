import React from 'react';
import SiteHeader from './siteHeader.js';

function SiteFrame({
    children,
    showBackButton=true
}) {
    return (
        <>
            <SiteHeader showBackButton={showBackButton} />
            <main className="main">
                {children}
            </main>
        </>
    );
}

export default SiteFrame;