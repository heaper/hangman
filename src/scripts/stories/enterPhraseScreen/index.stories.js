import React from 'react';
import EnterPhraseScreen from '../../components/screens/enterPhraseScreen/index.js';
import { StoryRouter } from 'storybook-react-router';

const players = [
  {
    number: 1, 
    name: 'Player 1'
  }
];

export default {
  component: EnterPhraseScreen,
  title: 'Screens/Enter Phrase Screen',
  decorators: [storyFn => <StoryRouter story={storyFn}>{storyFn()}</StoryRouter>]
};

export const defaultScreen = () => <EnterPhraseScreen players={players} />;