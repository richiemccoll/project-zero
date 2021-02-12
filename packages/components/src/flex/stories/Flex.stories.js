import React from 'react';

import Flex from '../Flex';

export default {
    title: 'Flex',
    component: Flex,
    argTypes: {},
};

const Template = () => (
    <Flex justifyContent="space-around" bg="#eee">
        <p>Child one</p>
        <p>Child two</p>
    </Flex>
);

export const Standard = Template.bind({});
Standard.args = {
    label: 'Flex',
};
