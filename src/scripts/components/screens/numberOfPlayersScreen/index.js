import React, {useState} from 'react';
import SiteFrame from '../../frame/siteFrame.js';
import NumberOfPlayersForm from './numberOfPlayersForm.js';
import { Redirect } from 'react-router-dom';

function onSubmit(numberOfPlayers, dispatch, setIsComplete) {
    dispatch({
        type: 'setNumberOfPlayers', 
        numberOfPlayers}
    );
    setIsComplete(true);
}

function NumberOfPlayersScreen({
    numberOfPlayers=1,
    dispatch
}) {
    const [isComplete, setIsComplete] = useState(false);

    return isComplete ? 
        <Redirect push to="/playerName/1" /> :
        (
            <SiteFrame showBackButton={false}>
                <NumberOfPlayersForm 
                    numberOfPlayers={numberOfPlayers}
                    onSubmit={numPlayers => onSubmit(numPlayers, dispatch, setIsComplete)}
                />
            </SiteFrame>
        );
}

export default NumberOfPlayersScreen;