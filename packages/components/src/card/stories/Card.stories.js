import React from 'react';
import Box from '../../box';
import Stack from '../../stack';

import Card from '../';
import Button from '../../button';

export default {
    title: 'Card',
    component: Card,
    argTypes: {},
};

const longDescription = `
This mission launches the eighteenth batch of operational Starlink satellites, which are version 1.0, from SLC-40.
It is the nineteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude.
The booster is expected to land on an ASDS.
`;

const DefaultTemplate = () => (
    <Box>
        <Stack>
            <Card title="Title" description="Short Description" image="" />
            <Card
                title="Title"
                description="Short Description"
                image="https://source.unsplash.com/user/erondu/500x500"
                actions={
                    <Button variant="light" onClick={console.log}>
                        Action
                    </Button>
                }
            />
            <Card title="Title" description={longDescription} image="https://source.unsplash.com/user/erondu/500x500" />
            <Card
                title="Title"
                description={longDescription}
                image="https://source.unsplash.com/user/erondu/500x500"
                actions={
                    <Button variant="light" onClick={console.log}>
                        Action
                    </Button>
                }
            />
        </Stack>
    </Box>
);

export const Default = DefaultTemplate.bind({});
