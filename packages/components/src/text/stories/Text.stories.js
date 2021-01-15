import React from "react";

import Text from "../Text";

export default {
  title: "Text",
  component: Text,
  argTypes: {},
};

const Template = (args) => (
  <Text>
    Text Component
  </Text>
);

export const Standard = Template.bind({});
Standard.args = {
  label: "Text",
};