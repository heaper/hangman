import React, {useRef, useEffect, useState} from 'react';
import Modal from '../../modals/modal.js';
import {ButtonSet, Button, ButtonLink} from '../../buttons/';
import {DataSet, DataItem} from '../../dataSets';

function ResultModal({
    title="",
    subtitle="",
    correctGuessCount=0,
    incorrectGuessCount=0,
    delay=0,
    onPlayAgain,
    onQuit
}) {
    const playAgainButtonRef = useRef();
    const [canRender, setCanRender] = useState(true);

    useEffect(() => {
        if(delay > 0) {
            setCanRender(false);
            const timeoutId = setTimeout(() => {
                setCanRender(true);
                playAgainButtonRef.current.focus();
            }, delay);
            return () => clearTimeout(timeoutId);
        } else {
            playAgainButtonRef.current.focus();
        }
    }, []);

    return canRender ? 
        (
            <Modal>
                <h1 className="modal-title">{title}</h1>
                <h2 className="modal-subtitle">{subtitle}</h2>
                <DataSet>
                    <DataItem label="Correct Letters:" value={correctGuessCount} />
                    <DataItem label="Incorrect Letters:" value={incorrectGuessCount} />
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
            </Modal>
        ) :
        null;
}

export default ResultModal;