export function formatDuration(duration) {
    const hours = Math.floor(duration / 3600000);
    const minutes = Math.floor((duration - (hours * 3600000)) / 60000);
    const seconds = Math.floor((duration - (hours * 3600000) - (minutes * 60000)) / 1000);

    return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}

function padNumber(number) {
    if(number < 10) {
        return `0${number}`;
    }

    return number.toString();
}