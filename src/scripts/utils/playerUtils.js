export function getPlayerName(playerNumber, players) {
    const foundPlayer = players.find(player => player.number === playerNumber);
    return foundPlayer ? foundPlayer.name : '';
}