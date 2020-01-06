import React, { useState, useEffect } from 'react';
import Title from './title.js';
import Noose from './noose.js';
import ButtonLink from '../../buttons/buttonLink.js';
import classnames from 'classnames';

const cajoleDelay = 12000;
const titleDelay = 4000;
const buttonDelay = 9000;

function renderStartButton(withIntro, shouldCajole) {
    const cssClasses = classnames('title-screen__button', {
        'title-screen__button--with-intro': withIntro
    });

    return (
        <ButtonLink 
            to="/numPlayers"
            className={cssClasses}
            cajole={shouldCajole}>
            Start Game
        </ButtonLink>
    );
}

function createTimer(setter, delay) {
    return setTimeout(() => {
        setter(true);
    }, delay);
}

function TitleScreen({withIntro=false}) {
    const [shouldCajole, setShouldCajole] = useState(false);
    const [playIntro, setPlayIntro] = useState(withIntro);
    const [isTitleVisible, setIsTitleVisible] = useState(!withIntro)
    const [isButtonVisible, setIsButtonVisible] = useState(!withIntro);

    useEffect(() => {
        const timers = [
            createTimer(setShouldCajole, cajoleDelay)
        ];
        
        if(withIntro) {
            timers.push(createTimer(setIsTitleVisible, titleDelay));
            timers.push(createTimer(setIsButtonVisible, buttonDelay));
        }

        return () => {
            timers.forEach(timer => clearTimeout(timer));
        }
        
    }, []);

    const cssClasses = classnames('main', 'title-screen', {
        'title-screen--with-intro': playIntro
    });

    function skipIntro() {
        setPlayIntro(false);
        setIsTitleVisible(true);
        setIsButtonVisible(true);
    }

    return (
        <main className={cssClasses} onClick={skipIntro}>
            <Noose withIntro={playIntro} />
            { isTitleVisible ? <Title withIntro={playIntro} /> : null }
            { isButtonVisible ? renderStartButton(playIntro, shouldCajole) : null }
        </main>
    );
}

export default TitleScreen;