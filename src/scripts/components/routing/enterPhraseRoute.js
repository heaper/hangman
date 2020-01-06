import React from 'react';
import { Redirect } from "react-router-dom";
import gameStatus from '../../constants/gameStatus.js';
import EnterPhraseScreen from '../screens/enterPhraseScreen';

function enterPhraseRoute(state, dispatch) {
    const {game, players} = state;

    if(game.status !== gameStatus.NOT_STARTED) {
        return <Redirect to='/game' />;
    } else if(players.length === 0 ) {
        return <Redirect to="/numPlayers" />;
    } else if(players.length !== 2) {
        return <Redirect to="/playerName/1" />;
    } else {
        return (
            <EnterPhraseScreen 
                hostPlayerNumber={game.hostPlayerNumber}
                players={players}
                dispatch={dispatch} />
        )
    }
}

export default enterPhraseRoute;