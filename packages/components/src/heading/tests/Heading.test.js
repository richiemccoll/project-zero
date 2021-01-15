import React from "react";
import { render } from "@testing-library/react";
import Heading from "../Heading";

describe("Heading", () => {
  it("renders children", () => {
    const { getByText } = render(<Heading>Hello</Heading>);
    const heading = getByText("Hello");
    expect(heading.nodeName).toEqual("H2");
  });
});