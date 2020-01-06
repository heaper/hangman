import React from 'react';
import Diagram from '../../components/screens/gameScreen/diagram.js';

export default {
    component: Diagram,
    title: 'Screens/Game Screen/Diagram'
};

export const defaultDiagram = () => <Diagram />;
export const withIntro = () =>  <Diagram withIntro={true}/>;
export const oneIncorrectGuess = () => <Diagram incorrectGuessCount={1} />;
export const twoIncorrectGuesses = () => <Diagram incorrectGuessCount={2} />;
export const threeIncorrectGuesses = () => <Diagram incorrectGuessCount={3} />;
export const fourIncorrectGuesses = () => <Diagram incorrectGuessCount={4} />;
export const fiveIncorrectGuesses = () => <Diagram incorrectGuessCount={5} />;
export const sixIncorrectGuesses = () => <Diagram incorrectGuessCount={6} />;