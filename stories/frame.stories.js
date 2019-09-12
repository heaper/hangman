import React from 'react';
import { storiesOf } from '@storybook/react';
import SiteHeader from '../src/components/frame/siteHeader';

storiesOf('Frame/Site Header', module)
  .add('Default', () => (
    <SiteHeader />
  ))
  .add('With Back Link', () => (
    <SiteHeader backUrl="#" />
  ));