import React, {useState, useEffect} from 'react';
import SiteFrame from '../../frame/siteFrame.js';
import PlayerNameForm from './playerNameForm.js';
import {Redirect} from 'react-router-dom';
import {getPlayerName} from '../../../utils/playerUtils.js';

function redirect(numberOfPlayers) {
    const redirectUrl = numberOfPlayers === 1 ? '/game' : '/enterPhrase';
    return <Redirect push to={redirectUrl} />;
}

function PlayerNameScreen({
    players = [],
    playerNumber:initialPlayerNumber = 1,
    dispatch,
    history
}) {
    const [isComplete, setIsComplete] = useState(false);
    const [playerNumber, setPlayerNumber] = useState(initialPlayerNumber);

    useEffect(() => {
        setPlayerNumber(initialPlayerNumber);
    }, [initialPlayerNumber]);

    function onSubmit(name) {
        dispatch({
            type: 'setPlayerName', 
            playerNumber,
            name
        });
    
        if(playerNumber === players.length) {
            if(players.length === 1) {
                dispatch({
                    type: 'startGame'
                });
            } else {
                setIsComplete(true);
            }
        } else {
            const nextPlayerNumber = playerNumber + 1;
            history.push(`/playerName/${nextPlayerNumber}`);
            setPlayerNumber(nextPlayerNumber);
        }
    }

    return isComplete ?
        redirect(players.length) :
        (
            <SiteFrame>
                <PlayerNameForm 
                    playerNumber={playerNumber}
                    playerName={getPlayerName(playerNumber, players)}
                    onSubmit={onSubmit}
                />
            </SiteFrame>
        );
}

export default PlayerNameScreen;