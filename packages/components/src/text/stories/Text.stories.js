import React from 'react';

import Text from '../Text';

export default {
    title: 'Text',
    component: Text,
    argTypes: {},
};

const RegularText = () => <Text>Text Component</Text>;

const SmallText = () => <Text variant="small">Text Component</Text>;

export const Regular = RegularText.bind({});
Regular.args = {
    label: 'BodyText Regular',
};

export const Small = SmallText.bind({});
Small.args = {
    label: 'BodyText Small',
};
