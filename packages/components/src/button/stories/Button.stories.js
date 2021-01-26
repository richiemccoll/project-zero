import React from 'react';
import Box from '../../box';

import Flex from '../../flex/';
import Text from '../../text';
import Button from '../Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {},
};

// eslint-disable-next-line
const Chevron = ({ direction = 'right' }) => (
    <svg
        viewBox="0 0 32 32"
        width={15}
        height={15}
        fill="none"
        stroke={'currentcolor'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={4}
    >
        {direction === 'right' ? <path d="M12 30 L24 16 12 2" /> : <path d="M20 30 L8 16 20 2" />}
    </svg>
);

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

const IconRightTemplate = () => (
    <Flex justifyContent="space-around">
        <Button variant="primary" onClick={console.log}>
            <Flex as="span" alignItems="center">
                <Text>Primary Icon Right</Text>
                <Box as="span" p={'0.25rem'}>
                    <Chevron />
                </Box>
            </Flex>
        </Button>

        <Button variant="dark" onClick={console.log}>
            <Flex as="span" alignItems="center">
                <Text>Primary Icon Right</Text>
                <Box as="span" p={'0.25rem'}>
                    <Chevron />
                </Box>
            </Flex>
        </Button>
    </Flex>
);

const IconLeftTemplate = () => (
    <Flex justifyContent="space-around">
        <Button variant="primary" onClick={console.log}>
            <Flex as="span" alignItems="center">
                <Box as="span" p={'0.25rem'}>
                    <Chevron direction="left" />
                </Box>
                <Text>Primary Icon Left</Text>
            </Flex>
        </Button>

        <Button variant="dark" onClick={console.log}>
            <Flex as="span" alignItems="center">
                <Box as="span" p={'0.25rem'}>
                    <Chevron direction="left" />
                </Box>
                <Text>Primary Icon Left</Text>
            </Flex>
        </Button>
    </Flex>
);

const CircularTemplate = () => (
    <Flex justifyContent="space-around">
        <Button variant="primary" onClick={console.log} circular>
            <Chevron direction="right" />
        </Button>

        <Button variant="dark" onClick={console.log} circular>
            <Chevron direction="right" />
        </Button>

        <Button variant="light" onClick={console.log} circular>
            <Chevron direction="right" />
        </Button>
    </Flex>
);

export const Primary = PrimaryTemplate.bind({});
export const Dark = DarkTemplate.bind({});
export const Light = LightTemplate.bind({});
export const Rounded = RoundedTemplate.bind({});
export const IconRight = IconRightTemplate.bind({});
export const IconLeft = IconLeftTemplate.bind({});
export const Circular = CircularTemplate.bind({});
