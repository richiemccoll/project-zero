import React from "react";
import PropTypes from "prop-types";

/**
* Everything in web design is a box, or the absence of a box.
 */
export default function Box({
  backgroundColor,
  ...props
}) {
  return <div>I am a box with {backgroundColor}</div>;
}

Box.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
};

Box.defaultProps = {
  backgroundColor: '#FFF',
};
