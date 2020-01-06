import React from 'react';
import SiteHeader from '../components/frame/siteHeader';
import { StoryRouter } from 'storybook-react-router';

export default {
  component: SiteHeader,
  title: 'Frame/Site Header',
  decorators: [storyFn => <StoryRouter story={storyFn}>{storyFn()}</StoryRouter>]
}

export const defaultSiteHeader = () => <SiteHeader />;
export const withoutBackButton = () => <SiteHeader showBackButton={false} />;