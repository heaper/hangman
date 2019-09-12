import React from 'react';
import ButtonSet from '../../buttons/buttonSet.js';
import Button from '../../buttons/button.js';

function NumberOfPlayersScreen() {
    return (
        <form className="form">
            <h1 className="page-title">How Many Players?</h1>
            <ButtonSet>
                <Button type="submit" value="1" name="numberOfPlayers">1 Player</Button>
                <Button type="submit" value="2" name="numberOfPlayers">2 Players</Button>
            </ButtonSet>
        </form>
    );
}

export default NumberOfPlayersScreen;