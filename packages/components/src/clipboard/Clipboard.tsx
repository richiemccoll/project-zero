import React from 'react';

import Button from '../button';
import Flex from '../flex';
import Text from '../text';
import clipboardService from './services/clipboard';

function ClipboardIcon({ icon }: { icon?: React.ReactElement | null }) {
    if (icon) {
        return icon;
    }
    return (
        <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="1rem"
            height="1rem"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
        >
            <path d="M12 2 L12 6 20 6 20 2 12 2 Z M11 4 L6 4 6 30 26 30 26 4 21 4" />
        </svg>
    );
}

export default function Clipboard({
    text,
    icon,
}: {
    text: string;
    icon?: React.ReactElement | null;
}): React.ReactElement {
    const [hasCopied, setCopied] = React.useState(false);
    const buttonText = hasCopied ? 'Copied!' : 'Copy';
    return (
        <Button
            variant="light"
            onClick={async () => {
                try {
                    await clipboardService.copy(text);
                    setCopied(true);
                } catch (error) {
                    setCopied(false);
                }
            }}
        >
            <Flex minWidth={hasCopied ? '10ch' : '8ch'} justifyContent="space-around" alignItems="center">
                <Text as="span">{buttonText}</Text>
                <ClipboardIcon icon={icon} />
            </Flex>
        </Button>
    );
}
