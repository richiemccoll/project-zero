import React, { ReactNode } from 'react';

import Stack from '../stack';
import Text from '../text';
import Flex from '../flex';

import { Input, ComboBoxButton } from './styles';
import DEFAULT_THEME, { Theme } from '../../default-theme';

type ComboxBoxProps = {
    id: string;
    label: string;
    placeholder?: string;
    children?: ReactNode;
    theme?: Theme;
};

ComboBoxInput.defaultProps = {
    theme: DEFAULT_THEME,
};

function ComboBoxInput({ id, label, placeholder, children }: ComboxBoxProps): React.ReactElement {
    const inputRef = React.useRef(null);
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [isFocused, setFocused] = React.useState(false);
    return (
        <Stack variant="tiny">
            <Text variant="small" as="label" id={`${id}-label`} htmlFor={id}>
                {label}
            </Text>
            <Flex>
                <Input
                    px={2}
                    py={2}
                    ref={inputRef}
                    id={id}
                    type="text"
                    role="combobox"
                    aria-expanded={isExpanded}
                    aria-autocomplete="list"
                    placeholder={placeholder}
                    onFocus={() => setFocused(true)}
                    onBlur={() => {
                        if (!isExpanded) {
                            setFocused(false);
                        }
                    }}
                />
                <ComboBoxButton
                    variant="light"
                    aria-label="Open"
                    size="tiny"
                    tab-index={-1}
                    isFocused={isFocused}
                    onClick={() => setIsExpanded((s) => !s)}
                >
                    <svg focusable="false" viewBox="0 0 24 24" width="2em" height="2em" aria-hidden="true">
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                    </svg>
                </ComboBoxButton>
            </Flex>
            {children}
        </Stack>
    );
}

// TODO
// - implement combobox item
// - implement error states
function ComboBoxItem({ children }: { children: ReactNode }): ReactNode {
    return children;
}

const ComboBox = {
    Input: ComboBoxInput,
    Item: ComboBoxItem,
};

export default ComboBox;
