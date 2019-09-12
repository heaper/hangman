import React from 'react';
import TextareaField from '../../fields/textareaField.js';
import Button from '../../buttons/button.js';

function EnterPhraseScreen({
    playerName='Player 1'
}) {
    return (
        <form className="form">
            <h1 className="page-title">{playerName}</h1>
            <TextareaField 
                id="phrase"
                label="Enter a Word or Phrase:" 
                isRequired={true} />
            <Button type="submit">Start Game</Button>
        </form>
    );
}

export default EnterPhraseScreen;