import React, {useState} from 'react';
import SiteFrame from '../../frame/siteFrame.js';
import EnterPhraseForm from './enterPhraseForm.js';
import {Redirect} from 'react-router-dom';

function onSubmit(phrase, dispatch, setIsComplete) {
    dispatch({type: 'startGame', phrase});
    setIsComplete(true);
}

function EnterPhraseScreen({
    players = [],
    hostPlayerNumber = 1,
    dispatch
}) {
    
    const [isComplete, setIsComplete] = useState(false);

    return isComplete ?
        <Redirect push to="/game" /> :
        (
            <SiteFrame>
                <EnterPhraseForm 
                    players={players}
                    hostPlayerNumber={hostPlayerNumber}
                    onSubmit={phrase => onSubmit(phrase, dispatch, setIsComplete)}
                />
            </SiteFrame>
        );
}

export default EnterPhraseScreen;