import React from 'react';
import { storiesOf } from '@storybook/react';
import NumberOfPlayersScreen from '../src/components/screens/numberOfPlayersScreen/index.js';

storiesOf('Screens/Number of Players Screen', module)
  .add('Default', () => (
    <NumberOfPlayersScreen />
  ));