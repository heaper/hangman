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