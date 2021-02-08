import React, { ReactNode } from 'react';

import Stack from '../stack';
import Text from '../text';
import Flex from '../flex';

import { Input, ComboBoxButton, ComboxBoxOptions, ComboBoxListItem } from './styles';
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

const ComboBoxContext = React.createContext(null);

function ComboBoxProvider({ children }) {
    const [isExpanded, setExpanded] = React.useState(false);
    const [isFocused, setFocused] = React.useState(false);
    const value = {
        isExpanded,
        isFocused,
        setExpanded,
        setFocused,
        onSelectOption: (option) => console.log(option),
    };
    return <ComboBoxContext.Provider value={value}>{children}</ComboBoxContext.Provider>;
}

function ComboBoxInput({ id, label, placeholder, children }: ComboxBoxProps): React.ReactElement {
    return (
        <ComboBoxProvider>
            <ComboBoxInputWithOptions id={id} label={label} placeholder={placeholder}>
                {children}
            </ComboBoxInputWithOptions>
        </ComboBoxProvider>
    );
}

function ComboBoxInputWithOptions({ id, label, placeholder, children }: ComboxBoxProps) {
    const { isExpanded, isFocused, setFocused, setExpanded } = React.useContext(ComboBoxContext);
    const inputRef = React.useRef(null);
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
                    aria-label="Show"
                    size="tiny"
                    tab-index={-1}
                    isFocused={isFocused}
                    onClick={() => setExpanded((s: boolean) => !s)}
                >
                    <svg focusable="false" viewBox="0 0 24 24" width="2em" height="2em" aria-hidden="true">
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                    </svg>
                </ComboBoxButton>
            </Flex>
            {isExpanded ? <ComboBoxItems>{children}</ComboBoxItems> : null}
        </Stack>
    );
}

// TODO
// - implement combobox item
// - implement error states
function ComboBoxItems({ children }: { children: ReactNode }): React.ReactElement {
    return <ComboxBoxOptions>{children}</ComboxBoxOptions>;
}

function ComboBoxItem({ children }: { children: ReactNode }): React.ReactElement {
    const { onSelectOption } = React.useContext(ComboBoxContext);
    const optionRef = React.useRef(null);
    return (
        <ComboBoxListItem
            ref={optionRef}
            role="option"
            px={2}
            py={2}
            onClick={(event) => {
                event.preventDefault();
                onSelectOption(optionRef.current);
            }}
        >
            {children}
        </ComboBoxListItem>
    );
}

const ComboBox = {
    Input: ComboBoxInput,
    Item: ComboBoxItem,
};

export default ComboBox;
