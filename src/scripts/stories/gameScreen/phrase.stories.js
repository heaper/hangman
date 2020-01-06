import React from 'react';
import Phrase from '../../components/screens/gameScreen/phrase.js';

export default {
    component: Phrase,
    title: 'Screens/Game Screen/Phrase'
};

export const defaultPhrase = () => <Phrase phrase="this is a test" />;
export const withIntro = () => <Phrase phrase="this is a test" withIntro={true}/>;
export const lettersGuessed = () => <Phrase phrase="this was a quiz" guessedLetters={['e','s','q','w']}/>;
export const mediumLengthPhrase = () => <Phrase phrase="this is a medium length test" />;
export const mediumLengthWord = () =>  <Phrase phrase="this is abcdefghijk test" />;
export const longLengthPhrase = () => <Phrase phrase="this is a long length test one two three" />;
export const longLengthWord = () => <Phrase phrase="this is abcdefghijklmnop" />;