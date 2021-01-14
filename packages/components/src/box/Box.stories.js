import React from 'react';

import Box from './Box';

export default {
  title: 'Box',
  component: Box,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Box',
};