import React from 'react';
import { Redirect } from "react-router-dom";
import gameStatus from '../../constants/gameStatus.js';
import PlayerNameScreen from '../screens/playerNameScreen';

function playerNameRoute({history, match}, state, dispatch) {
    const {game, players} = state;

    const playerNumber = Number.parseInt(match.params.playerNumber);

    if(game.status !== gameStatus.NOT_STARTED) {
        return <Redirect to='/game' />;
    } else if(players.length === 0 ) {
        return <Redirect to="/numPlayers" />;
    } else if(playerNumber > players.length) {
        return <Redirect to="/playerName/1" />;
    } else {
        return (
            <PlayerNameScreen 
                playerNumber={playerNumber}
                players={players} 
                dispatch={dispatch}
                history={history}  />
        )
    }
}

export default playerNameRoute;