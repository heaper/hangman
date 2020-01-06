import combineReducers from './combineReducers.js';
import players from './playersReducer.js';
import game from './gameReducer.js';
import gameStatus from '../constants/gameStatus.js';

export const initialState = {
    players: [],
    game: {
        status: gameStatus.NOT_STARTED,
        hostPlayerNumber: null,
        guesserPlayerNumber: null,
        phrase: null,
        guessedLetters: [],
        startDate: null,
        endDate: null
    }
};

const rootReducer = combineReducers({
    players,
    game
});

export default rootReducer;