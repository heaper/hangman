import React from 'react';
import ResultModal from './resultModal.js';

function LoseModal({
    guesserPlayerName='',
    correctGuessCount=0,
    incorrectGuessCount=0,
    onPlayAgain,
    onQuit
}) {
    return (
        <ResultModal 
            title="Hang 'Em High!"
            subtitle={`${guesserPlayerName} Lost!`}
            correctGuessCount={correctGuessCount}
            incorrectGuessCount={incorrectGuessCount}
            delay={4000}
            onPlayAgain={onPlayAgain}
            onQuit={onQuit}
        />
    );
}

export default LoseModal;