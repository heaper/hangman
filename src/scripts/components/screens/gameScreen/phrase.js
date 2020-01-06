import React from 'react';
import classnames from 'classnames';
import { getPhraseSizeClassName, getNumberOfLettersInPhrase } from '../../../utils/phraseUtils.js';

function renderLetter(letter, letterIndex, guessedLetters, keySeed) {
    const isLetterGuessed = guessedLetters.includes(letter);

    const cssClass = classnames('letter', {
        'letter--guessed': isLetterGuessed
    });
    const content = isLetterGuessed ? letter : '';
    const animationDelay = isLetterGuessed ? 0 : (letterIndex * .1).toFixed(1);  
    const key = keySeed + letterIndex;

    return (
        <div 
            key={key}
            className={cssClass}
            style={{
                animationDelay: `${animationDelay}s`
            }}>
            {content}
        </div>
    );
}

function renderWord(word, wordIndex, words, guessedLetters, keySeed) {
    const letters = word.split('');

    const offsetIndex = getNumberOfLettersInPhrase(words, wordIndex);

    return (
        <div 
            className="word" 
            key={wordIndex}>
            {
                letters.map((letter, letterIndex) => renderLetter(letter, offsetIndex+letterIndex, guessedLetters, keySeed))
            }
        </div>
    );
}

function Phrase({
    phrase='',
    guessedLetters=[],
    keySeed=0,
    withIntro=false
}) {
    const words = phrase ? phrase.split(' ') : [];
    const cssClasses = classnames('phrase', getPhraseSizeClassName(phrase), {
        'phrase--with-intro': withIntro
    });


    return (
        <div className={cssClasses}>
            {
                words.map((word, index) => renderWord(word, index, words, guessedLetters, keySeed))
            }
        </div>			
    );
}

export default Phrase;