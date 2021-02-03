import styled from 'styled-components';

/**
 * Produces the opposite effect of The aria-hidden="true" attribute.
 * Ref: https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/
 */
const VisuallyHidden = styled.span`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export default VisuallyHidden;
