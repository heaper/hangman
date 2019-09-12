import React from 'react';
import { storiesOf } from '@storybook/react';
import TextareaField from '../src/components/fields/textareaField.js';

storiesOf('Interactive Elements/Textarea Field', module)
  .add('Default', () => (
    <TextareaField 
        id="textarea"
        label="Textarea Field"
    />
  ))
  .add('Disabled', () => (
    <TextareaField 
        id="textarea"
        label="Textarea Field"
        isDisabled={true}
/>
  ));