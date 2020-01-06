import React from 'react';
import Noose from '../../components/screens/titleScreen/noose.js';

export default {
    component: Noose,
    title: 'Screens/Title Screen/Noose'
};

export const defaultNoose = () => <Noose />;
export const withIntro = () => <Noose withIntro={true} />;