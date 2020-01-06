import React from 'react';
import { Redirect } from "react-router-dom";
import gameStatus from '../../constants/gameStatus.js';
import GameScreen from '../screens/gameScreen';

function renderRedirect(players) {
    let to;

    if(players.length === 1) {
        to = '/playerName/1';
    } else if(players.length === 2) {
        to = '/enterPhrase';
    } else {
        to = '/';
    }

    return <Redirect to={to} />;
}

function gameRoute(state, dispatch) {
    const {game, players} = state;

    return game.status === gameStatus.NOT_STARTED ?
        renderRedirect(players) :
        <GameScreen 
            guesserPlayerNumber={game.guesserPlayerNumber}
            players={players}
            {...game}
            dispatch={dispatch} />;
}

export default gameRoute;