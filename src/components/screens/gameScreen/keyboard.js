import React from 'react';
import Button from '../../buttons/button.js';

const letters = ('abcdefghijklmnopqrstuvwxyz').split('');

function Keyboard({
    guessedLetters=[]
}) {
    return (
        <div className="keyboard">
            { 
                letters.map((letter, index) => 
                    <Button 
                        key={index}
                        className="keyboard__button"
                        value={letter}
                        isDisabled={guessedLetters.includes(letter)}>
                        {letter}
                    </Button>
                )
            }
        </div>
    );
}

export default Keyboard;