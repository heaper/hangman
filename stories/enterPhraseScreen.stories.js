import React from 'react';
import { storiesOf } from '@storybook/react';
import EnterPhraseScreen from '../src/components/screens/enterPhraseScreen/index.js';

storiesOf('Screens/Enter Phrase Screen', module)
  .add('Default', () => (
    <EnterPhraseScreen />
  ));