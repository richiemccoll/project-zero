import React from 'react';

import Box from '../box';
import Heading from '../heading';
import Image from '../image';
import Stack from '../stack';
import Text from '../text';
import { useFadedTruncation } from '../utils/styles';

type CardProps = {
    title: string;
    image?: string;
    description?: string;
    actions?: React.ReactElement | null;
};

const LIGHT_SHADOW = '0px 3px 3px rgba(0, 0, 0, 0.25)';
const DEFAULT_CARD_STYLES = {
    maxWidth: '40ch',
    minHeight: '22.5em',
    boxShadow: LIGHT_SHADOW,
    borderRadius: 6,
};

const FadedText = useFadedTruncation(Text);

Card.defaultProps = {
    actions: null,
};

/**
 * A composition that contains display content and actions for some specific topic.
 */
export default function Card({ title, image, description, actions }: CardProps): React.ReactElement {
    const showActions = React.isValidElement(actions);
    return (
        <Box {...DEFAULT_CARD_STYLES}>
            <Stack>
                <Image src={image} testId="card-image" alt="" />
                <Box px={3}>
                    <Heading variant="small">{title}</Heading>
                    <FadedText>{description}</FadedText>
                    {showActions ? <Box paddingBottom={3}>{actions}</Box> : null}
                </Box>
            </Stack>
        </Box>
    );
}
