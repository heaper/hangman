import React from 'react';
import ResultModal from './resultModal.js';

function WinModal({
    guesserPlayerName='',
    correctGuessCount=0,
    incorrectGuessCount=0,
    onPlayAgain,
    onQuit
}) {
    return (
        <ResultModal 
            title="Spared the Noose!"
            subtitle={`${guesserPlayerName} Won!`}
            correctGuessCount={correctGuessCount}
            incorrectGuessCount={incorrectGuessCount}
            delay={4000}
            onPlayAgain={onPlayAgain}
            onQuit={onQuit}
        />
    );
}

export default WinModal;