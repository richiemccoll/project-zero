import React, { Children, ButtonHTMLAttributes, SyntheticEvent } from "react";

import Text from "../text/";
import Box from "../box/";

const VALID_ELEMENT_TYPES = ["button", "a"];

type LinkProps = {
  href?: string;
  role?: string;
  target?: string;
  rel?: string;
};

type ElementProps = LinkProps | ButtonHTMLAttributes<HTMLButtonElement>;

function getElementProps(type: string, props): ElementProps {
  if (type !== "button") {
    return {
      role: "button",
      href: props.href,
      target: props.target ? props.target : undefined,
      rel: props.rel ? props.rel : undefined,
      ...props,
    };
  }
  return {
    ...props,
  };
}

export default function Button({
  children,
  as = "button",
  variant = "primary",
  onClick,
  onPress,
  ...props
}) {
  const elementType = VALID_ELEMENT_TYPES.includes(as) ? as : "button";
  const childElements = Children.map(children, (child) => {
    if (typeof child === "string") {
      return <Text as="span">{child}</Text>;
    }
    return child;
  });
  const elementProps = getElementProps(elementType, props);
  function handleOnClick(event: SyntheticEvent) {
    if (props.disabled) {
        return;
    }
    onClick(event);
  }
  return (
    <Box
      as={elementType}
      bg={variant}
      px={3}
      py={2}
      border={0}
      borderRadius={4}
      onClick={handleOnClick}
      {...elementProps}
    >
      {childElements}
    </Box>
  );
}
