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
    theme?: Theme;
    options?: Array<string>;
};

ComboBox.defaultProps = {
    theme: DEFAULT_THEME,
};

const ComboBoxContext = React.createContext(null);

function ComboBoxProvider({ children }: { children: ReactNode }): React.ReactElement {
    const [inputValue, setInputValue] = React.useState('');
    const [isExpanded, setExpanded] = React.useState(false);
    const [isFocused, setFocused] = React.useState(false);
    const value = {
        inputValue,
        setInputValue,
        isExpanded,
        isFocused,
        setExpanded,
        setFocused,
    };
    return <ComboBoxContext.Provider value={value}>{children}</ComboBoxContext.Provider>;
}

function ComboBox({ id, label, placeholder, options }: ComboxBoxProps): React.ReactElement {
    return (
        <ComboBoxProvider>
            <ComboBoxInputWithOptions id={id} label={label} placeholder={placeholder} options={options} />
        </ComboBoxProvider>
    );
}

function ComboBoxInputWithOptions({ id, label, placeholder, options }: ComboxBoxProps) {
    const { isExpanded, isFocused, setFocused, setExpanded, inputValue, setInputValue } = React.useContext(
        ComboBoxContext,
    );
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
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
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
            {isExpanded ? (
                <ComboxBoxOptions>
                    {options.map((option) => {
                        return (
                            <ComboBoxListItem
                                key={option}
                                role="option"
                                px={2}
                                py={2}
                                onClick={(event) => {
                                    event.preventDefault();
                                    setInputValue(option);
                                    setExpanded(false);
                                }}
                            >
                                {option}
                            </ComboBoxListItem>
                        );
                    })}
                </ComboxBoxOptions>
            ) : null}
        </Stack>
    );
}

export default ComboBox;
