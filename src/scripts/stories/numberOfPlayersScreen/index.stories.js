import React from 'react';
import NumberOfPlayersScreen from '../../components/screens/numberOfPlayersScreen/index.js';
import { StoryRouter } from 'storybook-react-router';

export default {
  component: NumberOfPlayersScreen,
  title: 'Screens/Number of Players Screen',
  decorators: [storyFn => <StoryRouter story={storyFn}>{storyFn()}</StoryRouter>]
};

export const defaultScreen = () => <NumberOfPlayersScreen numberOfPlayers={1} />;