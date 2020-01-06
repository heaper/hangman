import React from 'react';
import Keyboard from '../../components/screens/gameScreen/keyboard.js';

export default {
    component: Keyboard,
    title: 'Screens/Game Screen/Keyboard'
};

export const defaultKeyboard = () => <Keyboard />;
export const lettersGuessed = () => <Keyboard guessedLetters={['e','s','u']}/>;