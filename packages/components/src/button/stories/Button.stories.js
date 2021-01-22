import React from 'react';

import Flex from '../../flex/';
import Button from '../Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {},
};

const PrimaryTemplate = () => (
    <Flex justifyContent="space-around">
        <Button variant="primary" onClick={console.log}>
            Primary Default
        </Button>

        <Button variant="primary" onClick={console.log} disabled>
            Primary Disabled
        </Button>
    </Flex>
);

const DarkTemplate = () => (
    <Flex justifyContent="space-around">
        <Button variant="dark" onClick={console.log}>
            Dark Default
        </Button>

        <Button variant="dark" onClick={console.log} disabled>
            Dark Disabled
        </Button>
    </Flex>
);

const LightTemplate = () => (
    <Flex justifyContent="space-around">
        <Button variant="light" onClick={console.log}>
            Light Default
        </Button>

        <Button variant="light" onClick={console.log} disabled>
            Light Disabled
        </Button>
    </Flex>
);

const RoundedTemplate = () => (
    <Flex justifyContent="space-around">
        <Button variant="primary" onClick={console.log} rounded>
            Primary Rounded Default
        </Button>

        <Button variant="primary" onClick={console.log} disabled rounded>
            Primary Rounded Disabled
        </Button>
    </Flex>
);

export const Primary = PrimaryTemplate.bind({});
Primary.args = {
    label: 'Button',
};

export const Dark = DarkTemplate.bind({});
DarkTemplate.args = {
    label: 'Button',
};

export const Light = LightTemplate.bind({});
LightTemplate.args = {
    label: 'Button',
};

export const Rounded = RoundedTemplate.bind({});
RoundedTemplate.args = {
    label: 'Button',
};
