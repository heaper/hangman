import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from '../src/components/screens/titleScreen/title.js';
import Noose from '../src/components/screens/titleScreen/noose.js';
import TitleScreen from '../src/components/screens/titleScreen/index.js';

storiesOf('Screens/Title Screen/Noose', module)
  .add('Default', () => (
    <Noose />
  ))
  .add('With intro', () => (
    <Noose withIntro={true} />
  ));

storiesOf('Screens/Title Screen/Title', module)
  .add('Default', () => (
    <Title />
  ))
  .add('With intro', () => (
    <Title withIntro={true} />
  ));

storiesOf('Screens/Title Screen', module)
  .add('Default', () => (
    <TitleScreen />
  ))
  .add('With intro', () => (
    <TitleScreen withIntro={true} />
  ));