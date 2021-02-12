import React from 'react';

import Flex from '../../flex/';
import Link from '../Link';

export default {
    title: 'Link',
    component: Link,
    argTypes: {},
};

const PrimaryTemplate = () => (
    <Flex justifyContent="space-around">
        <Link
            href="#"
            onPress={(e) => {
                e.preventDefault();
                console.log('onPress()');
            }}
        >
            Primary Default
        </Link>

        <Link
            href="#"
            onPress={(e) => {
                e.preventDefault();
                console.log('onPress()');
            }}
            inline
        >
            Primary Inline
        </Link>
    </Flex>
);

const SecondaryTemplate = () => (
    <Flex justifyContent="space-around">
        <Link
            href="#"
            onPress={(e) => {
                e.preventDefault();
                console.log('onPress()');
            }}
            variant="secondary"
        >
            Secondary Default
        </Link>

        <Link
            href="#"
            onPress={(e) => {
                e.preventDefault();
                console.log('onPress()');
            }}
            variant="secondary"
            inline
        >
            Secondary Inline
        </Link>
    </Flex>
);

export const Primary = PrimaryTemplate.bind({});
export const Secondary = SecondaryTemplate.bind({});
