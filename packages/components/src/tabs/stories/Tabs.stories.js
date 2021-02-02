import React from 'react';

import Box from '../../box';
import Tabs from '../Tabs';

export default {
    title: 'Tabs',
    component: Tabs,
    argTypes: {},
};

const Default = () => (
    <Box>
        <Tabs.Container>
            <Box maxWidth="600px">
                <Tabs.List justifyContent="space-between">
                    <Tabs.Tab>Tab one</Tabs.Tab>
                    <Tabs.Tab>Tab two</Tabs.Tab>
                    <Tabs.Tab>Tab three</Tabs.Tab>
                </Tabs.List>
            </Box>

            <Tabs.Panels>
                <Tabs.Panel>Tab one</Tabs.Panel>
                <Tabs.Panel>Tab two</Tabs.Panel>
                <Tabs.Panel>Tab three</Tabs.Panel>
            </Tabs.Panels>
        </Tabs.Container>
    </Box>
);

export const Standard = Default.bind({});
