import React from 'react';

import ComboBox from '../';

export default {
    title: 'ComboBox',
    component: ComboBox,
    argTypes: {},
};

const DEFAULT_OPTIONS = ['a', 'b', 'c'];
const DEFAULT_PROPS = {
    options: DEFAULT_OPTIONS,
    id: 'test',
    label: 'test',
    placholder: 'Please enter some text...',
};

const Default = () => <ComboBox {...DEFAULT_PROPS} />;

export const Primary = Default.bind({});
