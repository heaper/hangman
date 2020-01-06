import React from 'react';
import { Redirect } from "react-router-dom";
import gameStatus from '../../constants/gameStatus.js';
import NumberOfPlayersScreen from '../screens/numberOfPlayersScreen';

function numberOfPlayersRoute(state, dispatch) {
    const {game, players} = state;

    if(game.status !== gameStatus.NOT_STARTED) {
        return <Redirect to='/game' />;
    } else {
        return (
            <NumberOfPlayersScreen 
                numberOfPlayers={players.length}
                dispatch={dispatch}  />
        )
    }
}

export default numberOfPlayersRoute;