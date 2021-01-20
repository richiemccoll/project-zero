import React from 'react';

import Heading from '../Heading';

export default {
    title: 'Heading',
    component: Heading,
    argTypes: {},
};

const HeadingLarge = () => <Heading variant="large">Heading Component</Heading>;

const HeadingMedium = () => <Heading variant="medium">Heading Component</Heading>;

const HeadingSmall = () => <Heading variant="small">Heading Component</Heading>;

const HeadingTiny = () => <Heading variant="tiny">Heading Component</Heading>;

export const Large = HeadingLarge.bind({});
Large.args = {
    label: 'Heading Large',
};

export const Medium = HeadingMedium.bind({});
Medium.args = {
    label: 'Heading Medium',
};

export const Small = HeadingSmall.bind({});
Small.args = {
    label: 'Heading Small',
};

export const Tiny = HeadingTiny.bind({});
Tiny.args = {
    label: 'Heading Tiny',
};
