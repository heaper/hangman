import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/buttons/button.js';

storiesOf('Interactive Elements/Button', module)
  .add('Default', () => (
    <Button>Button</Button>
  ))
  .add('Disabled', () => (
    <Button isDisabled={true}>Disabled Button</Button>
  ))
  .add('Cajole', () => (
    <Button isCajole={true}>Cajole Button</Button>
  )); 