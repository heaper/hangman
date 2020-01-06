import React, {useState, useEffect, useRef} from 'react';
import Button from '../../buttons/button.js';
import classnames from 'classnames';
import { isLetterKey } from '../../../utils/keyboardUtils.js';

const letters = ('abcdefghijklmnopqrstuvwxyz').split('');

function onKeyDown({key}, setActiveLetter, isDisabled) {
    if(!isDisabled && isLetterKey(key)) {
        setActiveLetter(key.toLowerCase());
    }
}

function onKeyUp({key}, onSelectLetter, isDisabled) {
    if(!isDisabled && isLetterKey(key)) {
        onSelectLetter(key.toLowerCase());
    }
}

function onButtonClick({target}, onSelectLetter) {
    onSelectLetter(target.value);
}

function Keyboard({
    guessedLetters=[],
    onSelectLetter,
    isDisabled=false
}) {
    const [activeLetter, setActiveLetter] = useState('');

    const buttonRef = useRef();

    useEffect(() => {
        if(buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [guessedLetters]);

    let hasFocusedButton = false;

    return (
        <div 
            className="keyboard" 
            onKeyUp={e => onKeyUp(e, setActiveLetter, isDisabled)}
            onKeyDown={e => onKeyDown(e, onSelectLetter, isDisabled)}>
            { 
                letters.map((letter, index) => {
                    const cssClasses = classnames('keyboard__button', {
                        'button--active': letter === activeLetter
                    });

                    const isButtonDisabled = isDisabled || guessedLetters.includes(letter);
                    const shouldFocusButton = !isButtonDisabled && !hasFocusedButton;
                    if(shouldFocusButton) {
                        hasFocusedButton = true;
                    }

                    return (
                        <Button 
                            key={index}
                            className={cssClasses}
                            value={letter}
                            isDisabled={isButtonDisabled}
                            ref={shouldFocusButton ? buttonRef : null}
                            onClick={e => onButtonClick(e, onSelectLetter)}>
                            {letter}
                        </Button>
                    );
                })
            }
        </div>
    );
}

export default Keyboard;