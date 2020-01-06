import React, {useState, useEffect} from 'react';
import SiteFrame from '../../frame/siteFrame.js';
import Phrase from './phrase.js';
import Keyboard from './keyboard.js';
import Diagram from './diagram.js';
import Results from './results.js';
import { getIncorrectGuessCount, getCorrectGuessCount, getGameDuration } from '../../../utils/gameUtils.js';
import { getPlayerName } from '../../../utils/playerUtils.js';
import gameStatus from '../../../constants/gameStatus.js';

function renderTitle(guesserPlayerName, status) {
    switch(status) {
        case gameStatus.WON:
            return `${guesserPlayerName} Wins!`;
        case gameStatus.LOST:
            return `${guesserPlayerName} Loses!`;
        default:
            return guesserPlayerName;
    }
}

function onSelectLetter(letter, status, dispatch) {
    if(status === gameStatus.STARTED) {
        dispatch({type: 'guessLetter', letter});
    }
}

function onPlayAgain(players, dispatch) {
    if(players.length === 1) {
        dispatch({type: 'startGame'});
    } else {
        dispatch({type: 'nextTurn'});
    }
}

function onQuit(dispatch) {
    dispatch({type: 'resetGame'});
}

function GameScreen({
    guesserPlayerNumber=1,
    players=[],
    phrase,
    guessedLetters=[],
    status,
    startDate,
    endDate,
    dispatch,
    withIntro=true
}) {
    const incorrectGuessCount = getIncorrectGuessCount(phrase, guessedLetters);
    const correctGuessCount = getCorrectGuessCount(phrase, guessedLetters);
    const guesserPlayerName = getPlayerName(guesserPlayerNumber, players);
    
    const [keySeed, setKeySeed] = useState(0);

    useEffect(() => {
        setKeySeed(Date.now());
    }, [phrase]);

    return (
        <SiteFrame>
            <h1 className="page-title">{renderTitle(guesserPlayerName, status)}</h1>
            <div className="game">
                <Diagram 
                    incorrectGuessCount={incorrectGuessCount}
                    withIntro={withIntro} />
                <Phrase 
                    phrase={phrase} 
                    guessedLetters={guessedLetters}
                    keySeed={keySeed}
                    withIntro={withIntro} />
                { 
                    status === gameStatus.STARTED ?
                        <Keyboard
                            guessedLetters={guessedLetters} 
                            isDisabled={status !== gameStatus.STARTED}
                            onSelectLetter={letter => onSelectLetter(letter, status, dispatch)} /> :
                        <Results
                            correctGuessCount={correctGuessCount}
                            incorrectGuessCount={incorrectGuessCount}
                            duration={getGameDuration(startDate, endDate)}
                            onPlayAgain={() => onPlayAgain(players, dispatch)}
                            onQuit={() => onQuit(dispatch)} />
                }
            </div>
        </SiteFrame>
    );
}

export default GameScreen;