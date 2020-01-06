import {getRandomPhrase, scrubPhrase} from '../utils/phraseUtils.js';
import {getGameStatus, isGameOver} from '../utils/gameUtils.js';
import gameStatus from '../constants/gameStatus.js';

function gameReducer(state, action) {
    switch (action.type) {
        case 'setNumberOfPlayers':
            return {
                ...state,
                hostPlayerNumber: action.numberOfPlayers > 1 ? 1 : null,
                guesserPlayerNumber: action.numberOfPlayers > 1 ? 2 : 1
            };
        case 'nextTurn':
            return {
                ...state,
                hostPlayerNumber: state.hostPlayerNumber === 1 ? 2 : 1,
                guesserPlayerNumber: state.guesserPlayerNumber === 1 ? 2 : 1,
                status: gameStatus.NOT_STARTED,
                phrase: null,
                guessedLetters: [],
                startDate: null,
                endDate: null
            };
        case 'startGame':
            const phrase = action.phrase ? 
                scrubPhrase(action.phrase) : 
                getRandomPhrase(state.phrase);

            return {
                ...state,
                status: gameStatus.STARTED,
                phrase: phrase.toLowerCase(),
                guessedLetters: [],
                startDate: Date.now()
            };
        case 'resetGame': 
            return {
                status: gameStatus.NOT_STARTED,
                hostPlayerNumber: null,
                guesserPlayerNumber: null,
                phrase: null,
                guessedLetters: [],
                startDate: null,
                endDate: null
            };
        case 'guessLetter':
            if(state.status !== gameStatus.STARTED) {
                return state;
            }

            const letter = action.letter.toLowerCase();

            if(state.guessedLetters.includes(letter)) {
                return state;
            }

            const guessedLetters = [...state.guessedLetters, letter];
            const status = getGameStatus(state.phrase, guessedLetters);
            const endDate = isGameOver(status) ? Date.now() : null; 

            return {
                ...state,
                status,
                guessedLetters,
                endDate
            };
        default:
            return state;
    }
}

export default gameReducer;