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
    Long Description, Long Description, Long Description, Long Description,
    Long Description, Long Description, Long Description, Long Description,
    Long Description, Long Description, Long Description, Long Description
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
