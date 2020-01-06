import React, {useState, useEffect, useRef} from 'react';
import TextField from '../../fields/textField.js';
import Button from '../../buttons/button.js';

function onFormSubmit(e, name, onSubmit) {
    e.preventDefault();

    onSubmit(name);
}

function PlayerNameForm({
    playerNumber = 1,
    playerName='',
    onSubmit
}) {
    const [name, setName] = useState(playerName);

    const inputRef = useRef();

    useEffect(() => {
        setName(playerName);
    }, [playerName, playerNumber]);

    useEffect(() => {
        inputRef.current.focus();
    }, [playerNumber]);

    return (
        <form className="form" onSubmit={e => onFormSubmit(e, name, onSubmit)}>
            <h1 className="page-title">Player {playerNumber}</h1>
            <TextField 
                id="phrase"
                label="Enter Name:" 
                isRequired={true}
                value={name}
                ref={inputRef}
                onChange={e => setName(e.target.value)} />
            <Button type="submit">Continue</Button>
        </form>
    );
        
}

export default PlayerNameForm;