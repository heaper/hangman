import React, {useState, useRef,useEffect} from 'react';
import TextareaField from '../../fields/textareaField.js';
import Button from '../../buttons/button.js';
import { getPlayerName } from '../../../utils/playerUtils.js';

function onFormSubmit(e, phrase, onSubmit) {
    e.preventDefault();

    onSubmit(phrase);
}

function EnterPhraseForm({
    players = [],
    hostPlayerNumber = 1,
    onSubmit
}) {
    const [phrase, setPhrase] = useState('');

    const textareaRef = useRef();

    useEffect(() => {
        textareaRef.current.focus();
    }, []);

    return (
        <form className="form" onSubmit={e => onFormSubmit(e, phrase, onSubmit)}>
            <h1 className="page-title">{getPlayerName(hostPlayerNumber, players)}</h1>
            <TextareaField 
                id="phrase"
                label="Enter a Word or Phrase:" 
                isRequired={true}
                value={phrase}
                ref={textareaRef}
                onChange={e => setPhrase(e.target.value)} />
            <Button type="submit">Start Game</Button>
        </form>
    );
}

export default EnterPhraseForm;