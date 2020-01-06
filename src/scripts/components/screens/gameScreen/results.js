import React, {useRef, useEffect} from 'react';
import {ButtonSet, Button} from '../../buttons/';
import {DataSet, DataItem} from '../../dataSets';
import {formatDuration} from '../../../utils/dateUtils.js';

function Results({
    correctGuessCount=0,
    incorrectGuessCount=0,
    duration=0,
    onPlayAgain,
    onQuit
}) {
    const playAgainButtonRef = useRef();
    
    useEffect(() => {
        playAgainButtonRef.current.focus();
    }, []);

    return (
        <div className="game-results">
            <DataSet>
                <DataItem label="Correct Guesses:" value={correctGuessCount} />
                <DataItem label="Incorrect Guesses:" value={incorrectGuessCount} />
                <DataItem label="Duration:" value={formatDuration(duration)} />
            </DataSet>
            <ButtonSet>
                <Button 
                    ref={playAgainButtonRef}
                    onClick={onPlayAgain}>
                    Play Again
                </Button>
                <Button 
                    isAlt={true}
                    onClick={onQuit}>
                    Quit
                </Button>
            </ButtonSet>
        </div>
    );
}

export default Results;