import React from "react";

import Heading from "../Heading";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {},
};

const Template = (args) => (
  <Heading>
    Heading Component
  </Heading>
);

export const Standard = Template.bind({});
Standard.args = {
  label: "Heading",
};