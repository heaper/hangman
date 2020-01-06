import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';

function hangman() {
    const containerEl = document.querySelector('#app');
    ReactDOM.render(<App />, containerEl);
}

export default hangman();

