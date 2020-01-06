import React from 'react';
import Results from '../../components/screens/gameScreen/results.js';

export default {
    component: Results,
    title: 'Screens/Game Screen/Results'
};

export const defaultState = () => (
    <Results 
        correctGuessCount={4}
        incorrectGuessCount={6}
        duration={5500}
    />
);