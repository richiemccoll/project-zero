import React from 'react';
import styled from 'styled-components';

type ImageProps = {
    src?: string;
    alt?: string;
    testId?: string;
};
type AspectRatioProps = {
    ratio?: string;
};

const AspectRatio = styled.div<AspectRatioProps>`
    padding-bottom: ${(props) => `calc(${props.ratio} * 100%)`};
    max-width: 100%;
    position: relative;

    * {
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > img,
    & > video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

AspectRatio.defaultProps = {
    ratio: '9 / 16',
};

function getImageBackground({ theme }) {
    return theme.colors.grey.regular.default;
}

const ImageElement = styled.img`
    max-width: 100%;
    background-color: ${getImageBackground};
`;

export default function Image({ src, alt, testId }: ImageProps): React.ReactElement {
    return (
        <AspectRatio>
            <ImageElement src={src} data-testid={testId} alt={alt ? alt : ''} />
        </AspectRatio>
    );
}
