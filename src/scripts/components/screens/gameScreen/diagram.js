import React from 'react';
import classnames from 'classnames';

function getBodyPartCssClasses(incorrectGuessCount, threshold, ...cssClasses) {
    return classnames('body-part', cssClasses, {
        'is-visible': incorrectGuessCount >= threshold
    });
}

function renderHead(incorrectGuessCount) {
    const cssClasses = getBodyPartCssClasses(incorrectGuessCount, 1, 'body-head');
    const eyeCssClasses = getBodyPartCssClasses(incorrectGuessCount, 6, 'body-eye');
    const mouthCssClasses = getBodyPartCssClasses(incorrectGuessCount, 6, 'body-mouth');

    return (
        <g id="head">
            <circle className={cssClasses} cx="130" cy="80" r="20" fill="none" />
            <g className={eyeCssClasses}>
                <line x1="120" y1="74" x2="126" y2="80"/>
                <line x1="134" y1="74" x2="140" y2="80"/>
            </g>
            <g className={eyeCssClasses}>
                <line x1="120" y1="80" x2="126" y2="74"/>
                <line x1="134" y1="80" x2="140" y2="74"/>
            </g>
            <circle className={mouthCssClasses} cx="130" cy="90" r="5" fill="none" />
        </g>
    );
}

function renderTorso(incorrectGuessCount) {
    const cssClasses = getBodyPartCssClasses(incorrectGuessCount, 2, 'body-torso');

    return (
        <line className={cssClasses} x1="130" y1="100" x2="130" y2="150" />
    );
}

function renderLeftArm(incorrectGuessCount) {
    const cssClasses = getBodyPartCssClasses(incorrectGuessCount, 3, 'body-arm', 'body-left-arm');

    return (
        <line className={cssClasses} x1="130" y1="120" x2="100" y2="140" />
    );
}

function renderRightArm(incorrectGuessCount) {
    const cssClasses = getBodyPartCssClasses(incorrectGuessCount, 4, 'body-arm', 'body-right-arm');

    return (
        <line className={cssClasses} x1="130" y1="120" x2="160" y2="140" />
    );
}

function renderLeftLeg(incorrectGuessCount) {
    const cssClasses = getBodyPartCssClasses(incorrectGuessCount, 5, 'body-leg', 'body-left-leg');

    return (
        <line className={cssClasses} x1="130" y1="150" x2="110" y2="190" />
    );
}

function renderRightLeg(incorrectGuessCount) {
    const cssClasses = getBodyPartCssClasses(incorrectGuessCount, 6, 'body-leg', 'body-right-leg');

    return (
        <line className={cssClasses} x1="130" y1="150" x2="150" y2="190" />
    );
}

function renderBody(incorrectGuessCount) {
    return (
        <g id="body">
            { renderHead(incorrectGuessCount) }
            { renderTorso(incorrectGuessCount) }
            { renderLeftArm(incorrectGuessCount) }
            { renderRightArm(incorrectGuessCount) }
            { renderLeftLeg(incorrectGuessCount) }
            { renderRightLeg(incorrectGuessCount) }
        </g>
    );
}

function Diagram({
    incorrectGuessCount=0,
    withIntro=false
}) {
    const cssClass = classnames('diagram', {
        'diagram--with-intro': withIntro
    });

    return (
        <svg className={cssClass} viewBox="0 0 200 270">
            { renderBody(incorrectGuessCount) }
            <g id="gallows">
                <line className="gallows-part gallows-base" x1="10" y1="250" x2="90" y2="250" />
                <line className="gallows-part gallows-pole" x1="50" y1="250" x2="50" y2="20" />
                <line className="gallows-part gallows-support" x1="50" y1="40" x2="70" y2="20" />
                <line className="gallows-part gallows-arm" x1="48" y1="20" x2="132" y2="20" />
                <line className="gallows-part gallows-rope" x1="130" y1="20" x2="130" y2="60" />
            </g>
        </svg>
    );
}

export default Diagram;