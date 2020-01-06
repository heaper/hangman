const letterRegEx = /^[a-zA-Z]$/i;

export function isLetterKey(key) {
    return event.key.match(letterRegEx)
}