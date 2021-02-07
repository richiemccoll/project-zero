import React from 'react';

import ComboBox from '../';

export default {
    title: 'ComboBox',
    component: ComboBox,
    argTypes: {},
};

const Default = () => (
    <ComboBox.Input id="test" label="This is an example label" placeholder="Please enter some text...">
        <ComboBox.Item>A</ComboBox.Item>
        <ComboBox.Item>B</ComboBox.Item>
        <ComboBox.Item>C</ComboBox.Item>
    </ComboBox.Input>
);

export const Primary = Default.bind({});
