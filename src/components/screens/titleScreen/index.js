import React, { useState, useEffect } from 'react';
import Title from './title.js';
import Noose from './noose.js';
import Button from '../../buttons/button.js';
import classnames from 'classnames';

const cajoleDelay = 12000;

function renderStartButton(withIntro, isCajole) {
    const cssClasses = classnames('title-screen__button', {
        'title-screen__button--with-intro': withIntro
    });

    return (
        <Button 
            className={cssClasses}
            isCajole={isCajole}>
            Start Game
        </Button>
    );
}

function TitleScreen({withIntro=false}) {
    const [isCajole, setIsCajole] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsCajole(true);
        }, cajoleDelay);
        return () => clearTimeout(timer);
    }, []);

    const cssClasses = classnames('main', 'title-screen', {
        'title-screen--with-intro': withIntro
    });

    return (
        <main class={cssClasses}>
            <Noose withIntro={withIntro} />
            <Title withIntro={withIntro} />
            { renderStartButton(withIntro, isCajole) }
        </main>
    );
}

export default TitleScreen;