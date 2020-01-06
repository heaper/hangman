import React from 'react';
import Title from '../../components/screens/titleScreen/title.js';

export default {
    component: Title,
    title: 'Screens/Title Screen/Title'
};

export const defaultTitle = () => <Title />;
export const withIntro = () => <Title withIntro={true} />;