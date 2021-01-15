import React from "react";
import { render } from "@testing-library/react";

import Flex from "../Flex";

describe("Flex", () => {
  it("should render children", () => {
    const { getByText } = render(<Flex>Default</Flex>);
    getByText("Default");
  });
});
