import React from 'react';
import Phrase from './phrase.js';
import Keyboard from './keyboard.js';
import Diagram from './diagram.js';

function GameScreen({
    playerName='Player 1',
    phrase,
    guessedLetters,
    incorrectGuessCount,
    withIntro=true
}) {
    return (
        <>
            <h1 className="page-title">{`${playerName}: Go!`}</h1>
            <div className="game">
                <Diagram 
                    incorrectGuessCount={incorrectGuessCount}
                    withIntro={withIntro} />
                <Phrase 
                    phrase={phrase} 
                    guessedLetters={guessedLetters}
                    withIntro={withIntro} />
                <Keyboard
                    guessedLetters={guessedLetters} />
            </div>
        </>
    );
}

export default GameScreen;