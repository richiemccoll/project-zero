import React from 'react';

import Box from '../Box';

export default {
    title: 'Box',
    component: Box,
    argTypes: {},
};

const Default = () => (
    <Box width={[1, 1 / 2]} p={4} mb={3} bg="#eee">
        Everything in web design is a box, or the absence of a box.
    </Box>
);

const Inverted = () => (
    <Box width={[1, 1 / 2]} p={4} mb={3} invert>
        Everything in web design is a box, or the absence of a box.
    </Box>
);

export const Standard = Default.bind({});
export const Invert = Inverted.bind({});
