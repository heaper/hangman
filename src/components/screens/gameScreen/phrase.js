import React from 'react';
import classnames from 'classnames';
import { getPhraseSizeClassName, getNumberOfLettersInPhrase } from './phraseUtils.js';

function renderLetter(letter, letterIndex, guessedLetters) {
    const isLetterGuessed = guessedLetters.includes(letter);

    const cssClass = classnames('letter', {
        'letter--guessed': isLetterGuessed
    });
    const content = isLetterGuessed ? letter : '';
    const animationDelay = isLetterGuessed ? 0 : (letterIndex * .1).toFixed(1);  

    return (
        <div 
            key={letterIndex}
            className={cssClass}
            style={{
                animationDelay: `${animationDelay}s`
            }}>
            {content}
        </div>
    );
}

function renderWord(word, wordIndex, words, guessedLetters) {
    const letters = word.split('');

    const offsetIndex = getNumberOfLettersInPhrase(words, wordIndex);

    return (
        <div 
            className="word" 
            key={wordIndex}>
            {
                letters.map((letter, letterIndex) => renderLetter(letter, offsetIndex+letterIndex, guessedLetters))
            }
        </div>
    );
}

function Phrase({
    phrase='',
    guessedLetters=[],
    withIntro=false
}) {
    const words = phrase.split(' ');
    const cssClasses = classnames('phrase', getPhraseSizeClassName(phrase), {
        'phrase--with-intro': withIntro
    });


    return (
        <div className={cssClasses}>
            {
                words.map((word, index) => renderWord(word, index, words, guessedLetters))
            }
        </div>			
    );
}

export default Phrase;