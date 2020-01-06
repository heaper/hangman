import React from 'react';
import TitleScreen from '../../components/screens/titleScreen/index.js';
import { StoryRouter } from 'storybook-react-router';

export default {
  component: TitleScreen,
  title: 'Screens/Title Screen',
  decorators: [storyFn => <StoryRouter story={storyFn}>{storyFn()}</StoryRouter>]
};

export const defaultScreen = () => <TitleScreen />;
export const withIntro = () => <TitleScreen withIntro={true} />;