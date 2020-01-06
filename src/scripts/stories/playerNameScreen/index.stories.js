import React from 'react';
import PlayerNameScreen from '../../components/screens/playerNameScreen/index.js';
import { StoryRouter } from 'storybook-react-router';

const players = [
  {
    number: 1, 
    name: 'Player 1'
  }
];

export default {
  component: PlayerNameScreen,
  title: 'Screens/Player Name Screen',
  decorators: [storyFn => <StoryRouter story={storyFn}>{storyFn()}</StoryRouter>]
};

export const defaultScreen = () => <PlayerNameScreen players={players} />;