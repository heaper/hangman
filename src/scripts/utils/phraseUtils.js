import phrases from '../data/phrases.js';

const phraseSizes = [
    {
        className: 'phrase--large',
        maxWordLength: 8,
        maxTotalLength: 20
    },
    {
        className: 'phrase--medium',
        maxWordLength: 12,
        maxTotalLength: 30
    },
    {
        className: 'phrase--small',
        maxWordLength: 16,
        maxTotalLength: 40
    }
];

const defaultPhraseSize = phraseSizes[2];

function getLongestWordLengthInPhrase(phrase) {
	const words = phrase.split(' ');
	return words.reduce((charCount, word) => {
		charCount = (word.length > charCount) ? word.length : charCount;
		return charCount;
	}, 0);
}

export function getPhraseSizeClassName(phrase) {
    if(phrase === null) {
        return defaultPhraseSize.className;
    }

    const longestWordLength = getLongestWordLengthInPhrase(phrase);

    const matchedPhraseSize = phraseSizes.find(phraseSize => {
        return longestWordLength <= phraseSize.maxWordLength && 
            phrase.length <= phraseSize.maxTotalLength;
    });

    return matchedPhraseSize ? 
        matchedPhraseSize.className :
        defaultPhraseSize.className;
}

export function getNumberOfLettersInPhrase(words, endWordIndex) {
    return words
        .slice(0, endWordIndex)
        .reduce((sum, word) => {
            return sum + word.length;
        }, 0);
}

export function getRandomPhrase(lastPhrase = '') {
    if(phrases.length === 0) {
        return null;
    }
    
    if(phrases.length === 1) {
        return phrases[0];
    }

    let newPhrase = '';

    do {
        newPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    } while (newPhrase === lastPhrase);

    return newPhrase;
}

export function scrubPhrase(phrase) {
    if(phrase === null) {
		return null;
	}
	return phrase.replace(/[^a-zA-Z ]/g, '');
}