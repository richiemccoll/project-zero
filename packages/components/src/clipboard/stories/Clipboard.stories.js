import React from 'react';

import Clipboard from '../';

export default {
    title: 'Clipboard',
    component: Clipboard,
    argTypes: {},
};

const DEFAULT_PROPS = {
    text: 'Text to copy',
};

const Default = () => <Clipboard {...DEFAULT_PROPS} />;

export const Standard = Default.bind({});
