import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TitleScreen from './screens/titleScreen';
import rootReducer, { initialState } from '../reducers/rootReducer';
import {numberOfPlayersRoute, playerNameRoute, enterPhraseRoute, gameRoute} from './routing';

function App() {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    console.log(state);
    return (
        <Router>
            <Switch>
                <Route 
                    exact 
                    path="/" 
                    render={props => <TitleScreen {...props} withIntro={true} />}
                />
                <Route
                    path="/numPlayers"
                    render={() => numberOfPlayersRoute(state, dispatch)}
                />
                <Route
                    path="/playerName/:playerNumber"
                    render={props => playerNameRoute(props, state, dispatch)}
                />
                <Route
                    path="/enterPhrase"
                    render={() => enterPhraseRoute(state, dispatch)}
                />
                <Route
                    path="/game"
                    render={() => gameRoute(state, dispatch)}
                />
            </Switch>
        </Router>
    );
}

export default App;