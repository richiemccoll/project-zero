import styled from 'styled-components';
import { space, color, layout, flexbox, border } from 'styled-system';

/**
 * Everything in web design is a box, or the absence of a box.
 */
const Box = styled.div(
    {
        boxSizing: 'border-box',
        minWidth: 0,
    },
    space,
    color,
    layout,
    flexbox,
    border,
);

export default Box;

Box.propTypes = {};

Box.defaultProps = {};
