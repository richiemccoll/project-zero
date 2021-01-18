import React from "react";

import Button from "../Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
};

const PrimaryTemplate = () => (
  <Button variant="primary" onClick={console.log}>
    Click
  </Button>
);
const SecondaryTemplate = () => (
  <Button variant="secondary" onClick={console.log}>
    Click
  </Button>
);

export const Primary = PrimaryTemplate.bind({});
Primary.args = {
  label: "Button",
};

export const Secondary = SecondaryTemplate.bind({});
SecondaryTemplate.args = {
  label: "Button",
};
