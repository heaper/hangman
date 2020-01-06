import React from 'react';
import Button from '../components/buttons/button.js';

export default { 
  component: Button,
  title: 'Interactive Elements/Button' 
};

export const defaultButton = () => <Button>Button</Button>;
export const altButton = () => <Button isAlt={true}>Alt Button</Button>;
export const disabled = () => <Button isDisabled={true}>Disabled Button</Button>;
export const cajole = () => <Button cajole={true}>Cajole Button</Button>;