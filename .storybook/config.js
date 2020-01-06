import { configure } from '@storybook/react';
import '../src/styles/styles.css';

configure(require.context('../src/scripts/stories', true, /\.stories\.js$/), module);