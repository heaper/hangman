function createPlayer(number) {
    return {
        number,
        name: ''
    };
};

function playersReducer(state, action) {
    switch (action.type) {
        case 'setNumberOfPlayers':
            const players = [];
        
            for(let i = 0; i < action.numberOfPlayers; i++) {
                players.push(createPlayer(i+1));
            }

            return players;
        case 'setPlayerName':
            return state.map(player => {
                if(player.number === action.playerNumber) {
                    return {
                        ...player,
                        name: action.name
                    };
                }
                return player;
            });
        case 'resetGame': 
            return [];
        default:
            return state;
    }
}

export default playersReducer;