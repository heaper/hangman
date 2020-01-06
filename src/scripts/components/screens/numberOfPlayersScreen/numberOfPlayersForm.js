import React, {useState, useEffect, useRef} from 'react';
import ButtonSet from '../../buttons/buttonSet.js';
import Button from '../../buttons/button.js';

function onFormSubmit(e, numPlayers, onSubmit) {
    e.preventDefault();

    onSubmit(numPlayers);
}

function renderButton(content, value, setNumPlayers, ref=null) {
    return (
        <Button 
            type="submit" 
            value={value} 
            name="numberOfPlayers"
            ref={ref}
            onClick={e => setNumPlayers(Number.parseInt(e.target.value))}>
            {content}
        </Button>
    );
}

function NumberOfPlayersForm({
    numberOfPlayers=1,
    onSubmit
}) {
    const [numPlayers, setNumPlayers] = useState(numberOfPlayers);
    const firstButtonRef = useRef();

    useEffect(() => {
        firstButtonRef.current.focus();
    }, []);

    return (
        <form className="form" onSubmit={e => onFormSubmit(e, numPlayers, onSubmit)}>
            <h1 className="page-title">How Many Players?</h1>
            <ButtonSet>
                {renderButton('1 Player', 1, setNumPlayers, firstButtonRef)}
                {renderButton('2 Player', 2, setNumPlayers)}
            </ButtonSet>
        </form>
    );
}

export default NumberOfPlayersForm;