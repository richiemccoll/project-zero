import React from "react";
import { render } from "@testing-library/react";
import Box from "../";

describe("Box", () => {
  it("should render children", () => {
    const { getByText } = render(<Box>Default</Box>);
    getByText("Default");
  });
});
