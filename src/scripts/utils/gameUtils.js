import gameStatus from '../constants/gameStatus.js';

const maxIncorrectGuessCount = 5;

export function getIncorrectGuessCount(phrase, guessedLetters) {
    if(phrase === null) {
        return 0;
    }

    return guessedLetters.reduce((count, letter) => {
        return phrase.includes(letter) ? count : count + 1;
    }, 0);
};

export function getCorrectGuessCount(phrase, guessedLetters) {
    if(phrase === null) {
        return 0;
    }

    return guessedLetters.reduce((count, letter) => {
        return phrase.includes(letter) ? count + 1 : count;
    }, 0);
};

export function isGameLost(phrase, guessedLetters) {
    const incorrectGuessCount = getIncorrectGuessCount(phrase, guessedLetters);

    return incorrectGuessCount > maxIncorrectGuessCount;
}

export function isGameWon(phrase, guessedLetters) {
    return doUnguessedLettersExist(phrase, guessedLetters) === false;
}

export function isGameOver(status) {
    return status === gameStatus.WON || status === gameStatus.LOST;
}

export function getGameStatus(phrase, guessedLetters) {
    if(phrase === null) {
        return gameStatus.NOT_STARTED;
    }

    if(isGameLost(phrase, guessedLetters)) {
        return gameStatus.LOST;
    }

    if(isGameWon(phrase, guessedLetters)) {
        return gameStatus.WON;
    }

    return gameStatus.STARTED;
}

export function getGameDuration(startDate, endDate) {
    return endDate - startDate;
}

function doUnguessedLettersExist(phrase, guessedLetters) {
    if(phrase === null) {
        return false;
    }

    return getPhraseLetters(phrase).some(letter => {
		return hasLetterBeenGuessed(letter, guessedLetters) === false;
	});
}

function hasLetterBeenGuessed(letter, guessedLetters) {
	return guessedLetters.includes(letter);
}

function getPhraseLetters(phrase) {
	if(phrase === null) {
		return [];
	}

	return phrase.replace(/[^a-zA-Z]*/g, '').split('');
}