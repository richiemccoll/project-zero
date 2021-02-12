import React from 'react';

import Stack from '../Stack';
import Box from '../../box';

export default {
    title: 'Stack',
    component: Stack,
    argTypes: {},
};

const RegularStack = () => (
    <Stack bg="#eee">
        <Box as="p" bg="#ddd">
            Child one
        </Box>
        <Box as="p" bg="#ddd">
            Child two
        </Box>
        <Box as="p" bg="#ddd">
            Child three
        </Box>
    </Stack>
);

const LargeStack = () => (
    <Stack bg="#eee" variant="large">
        <Box as="p" bg="#ddd">
            Child one
        </Box>
        <Box as="p" bg="#ddd">
            Child two
        </Box>
        <Box as="p" bg="#ddd">
            Child three
        </Box>
    </Stack>
);

const SmallStack = () => (
    <Stack bg="#eee" variant="small">
        <Box as="p" bg="#ddd">
            Child one
        </Box>
        <Box as="p" bg="#ddd">
            Child two
        </Box>
        <Box as="p" bg="#ddd">
            Child three
        </Box>
    </Stack>
);

export const Regular = RegularStack.bind({});
Regular.args = {
    label: 'Stack',
};

export const Large = LargeStack.bind({});
Large.args = {
    label: 'Stack',
};

export const Small = SmallStack.bind({});
Small.args = {
    label: 'Stack',
};
