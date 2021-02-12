import React, { ChangeEvent, KeyboardEvent, ReactNode } from 'react';

import Stack from '../stack';
import Text from '../text';
import Flex from '../flex';

import { Input, ComboBoxButton, ComboxBoxOptions, ComboBoxListItem } from './styles';
import DEFAULT_THEME, { Theme } from '../../default-theme';
import { keys } from '../constants';

// These represent the 4 different autocomplete behaviours a ComboBox can have.
const AUTOCOMPLETE_TYPES = { NONE: 'none', INLINE: 'inline', AUTOMATIC: 'automatic', MANUAL: 'manual' };

// UI Actions used that map to UI states from the reducer.
const ACTION_TYPES = {
    SET_INPUT_VALUE: 'SET_INPUT_VALUE',
    CLEAR_INPUT_VALUE: 'CLEAR_INPUT_VALUE',
    SET_OPTIONS_VISIBILITY: 'SET_OPTIONS_VISIBILITY',
    TOGGLE_OPTIONS_VISIBILITY: 'TOGGLE_OPTIONS_VISIBILITY',
    SET_FOCUS: 'SET_FOCUS',
    SET_FOCUS_TRAP: 'SET_FOCUS_TRAP',
    SET_OPTION_INDEX: 'SET_OPTION_INDEX',
};

// The user focus is only ever between these two areas, or traps.
const FOCUS_TRAPS = { COMBOBOX: 'combobox', OPTIONS: 'options' };

/**
 * TODO
- Implement the autocomplete types.
- Test with Keyboard and Screenreader.
 */

type ComboxBoxProps = {
    id: string;
    label: string;
    placeholder?: string;
    theme?: Theme;
    options?: Array<string>;
    type?: string;
};

ComboBox.defaultProps = {
    theme: DEFAULT_THEME,
    type: AUTOCOMPLETE_TYPES.NONE,
};

const ComboBoxContext = React.createContext(null);

const initialState = {
    inputValue: '',
    isExpanded: false,
    isFocused: false,
    focusTrap: FOCUS_TRAPS.COMBOBOX,
    activeOptionIndex: 0,
};

function comboBoxReducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_INPUT_VALUE:
            return { ...state, inputValue: action.value };
        case ACTION_TYPES.CLEAR_INPUT_VALUE:
            return { ...state, inputValue: '', activeOptionIndex: 0 };
        case ACTION_TYPES.SET_OPTIONS_VISIBILITY:
            return { ...state, isExpanded: Boolean(action.value === 'visible'), activeOptionIndex: 0 };
        case ACTION_TYPES.TOGGLE_OPTIONS_VISIBILITY:
            return { ...state, isExpanded: !state.isExpanded, activeOptionIndex: 0 };
        case ACTION_TYPES.SET_FOCUS:
            return { ...state, isFocused: action.value };
        case ACTION_TYPES.SET_FOCUS_TRAP: {
            return { ...state, focusTrap: action.value };
        }
        case ACTION_TYPES.SET_OPTION_INDEX: {
            return { ...state, activeOptionIndex: action.value };
        }
        default:
            throw new Error();
    }
}

function ComboBoxProvider({ children }: { children: ReactNode }): React.ReactElement {
    const [{ inputValue, isExpanded, isFocused, focusTrap, activeOptionIndex }, dispatch] = React.useReducer(
        comboBoxReducer,
        initialState,
    );
    const value = {
        inputValue,
        focusTrap,
        isExpanded,
        isFocused,
        activeOptionIndex,
        dispatch,
    };
    return <ComboBoxContext.Provider value={value}>{children}</ComboBoxContext.Provider>;
}

/**
 * A combobox is made up of the combination of a single-line textbox and
 * an associated pop-up element that helps a user set the value of the textbox.
 */
function ComboBox({ id, label, placeholder, options, type }: ComboxBoxProps): React.ReactElement {
    return (
        <ComboBoxProvider>
            <ComboBoxInputWithOptions id={id} label={label} placeholder={placeholder} options={options} type={type} />
        </ComboBoxProvider>
    );
}

function ComboBoxInputWithOptions({ id, label, placeholder, options, type }: ComboxBoxProps) {
    const { isExpanded, isFocused, inputValue, dispatch, focusTrap, activeOptionIndex } = React.useContext(
        ComboBoxContext,
    );
    const inputRef = React.useRef(null);
    const optionsRef = React.useRef(null);

    const handleOnButtonClick = React.useCallback(() => {
        if (options.length > 0) {
            dispatch({ type: ACTION_TYPES.TOGGLE_OPTIONS_VISIBILITY });
        }
    }, [options]);

    function handleInputKeydown(event: KeyboardEvent): void {
        if (event.key === keys.ESC) {
            dispatch({ type: ACTION_TYPES.CLEAR_INPUT_VALUE });
            if (isExpanded) {
                dispatch({ type: ACTION_TYPES.SET_OPTIONS_VISIBILITY, value: 'hidden' });
            }
            return;
        }
        if (event.key === keys.DOWN && isExpanded) {
            if (focusTrap === FOCUS_TRAPS.COMBOBOX) {
                const [firstOption] = getOptionsNodeList();
                firstOption.focus();
                dispatch({ type: ACTION_TYPES.SET_FOCUS_TRAP, value: FOCUS_TRAPS.OPTIONS });
                return;
            }
        }
    }

    function getOptionsNodeList(): Array<HTMLElement> {
        return Array.from(optionsRef.current.querySelectorAll('[role=option]'));
    }

    function handleOptionsKeydown(event: KeyboardEvent): void {
        if (event.key === keys.ESC) {
            dispatch({ type: ACTION_TYPES.CLEAR_INPUT_VALUE });
            dispatch({ type: ACTION_TYPES.SET_OPTIONS_VISIBILITY, value: 'hidden' });
            inputRef.current.focus();
            return;
        }

        if (isExpanded) {
            const optionsNodeList = getOptionsNodeList();
            if (event.key === keys.DOWN) {
                const nextIndex = activeOptionIndex + 1;
                const nextOption = optionsNodeList[nextIndex];
                if (nextOption) {
                    dispatch({ type: ACTION_TYPES.SET_OPTION_INDEX, value: nextIndex });
                    nextOption.focus();
                } else {
                    // Assume we're at the last, cycle back to the first
                    const firstOption = optionsNodeList[initialState.activeOptionIndex];
                    dispatch({ type: ACTION_TYPES.SET_OPTION_INDEX, value: initialState.activeOptionIndex });
                    firstOption.focus();
                }
                return;
            }

            if (event.key === keys.UP) {
                const previousIndex = activeOptionIndex - 1;
                const previousOption = optionsNodeList[previousIndex];
                if (previousOption) {
                    dispatch({ type: ACTION_TYPES.SET_OPTION_INDEX, value: previousIndex });
                    previousOption.focus();
                } else {
                    // Cycle back to the last option, assuming we're at the first
                    const lastOptionIndex = options.length - 1;
                    const lastOption = optionsNodeList[lastOptionIndex];
                    dispatch({ type: ACTION_TYPES.SET_OPTION_INDEX, value: lastOptionIndex });
                    lastOption.focus();
                }
                return;
            }

            if (event.key === keys.ENTER) {
                const activeOption = options[activeOptionIndex];
                dispatch({ type: ACTION_TYPES.SET_INPUT_VALUE, value: activeOption });
                dispatch({ type: ACTION_TYPES.SET_OPTIONS_VISIBILITY, value: 'hidden' });
                inputRef.current.focus();
            }
        }
    }

    function handleInputOnChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch({ type: ACTION_TYPES.SET_INPUT_VALUE, value: event.target.value });
        if (!isExpanded) {
            dispatch({ type: ACTION_TYPES.SET_OPTIONS_VISIBILITY, value: 'visible' });
        }
    }

    function handleClickOutside(event) {
        if (inputRef.current && inputRef.current.contains(event.target)) {
            return;
        }
        if (optionsRef.current && optionsRef.current.contains(event.target)) {
            return;
        }

        dispatch({ type: ACTION_TYPES.SET_OPTIONS_VISIBILITY, value: 'hidden' });
    }

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                    aria-controls={`${id}-options`}
                    aria-haspopup={Boolean(options.length)}
                    autoComplete={type !== 'none' ? 'on' : 'off'}
                    placeholder={placeholder}
                    onFocus={() => {
                        dispatch({ type: ACTION_TYPES.SET_FOCUS, value: true });
                        dispatch({ type: ACTION_TYPES.SET_FOCUS_TRAP, value: FOCUS_TRAPS.COMBOBOX });
                    }}
                    onBlur={() => {
                        if (!isExpanded) {
                            dispatch({ type: ACTION_TYPES.SET_FOCUS, value: false });
                        }
                    }}
                    value={inputValue}
                    onChange={handleInputOnChange}
                    onKeyDown={handleInputKeydown}
                />
                <ComboBoxButton
                    variant="light"
                    aria-label="Show"
                    aria-haspopup="true"
                    size="tiny"
                    tabIndex={-1}
                    isFocused={isFocused}
                    onClick={handleOnButtonClick}
                    onFocus={() => dispatch({ type: ACTION_TYPES.SET_FOCUS, value: true })}
                    onBlur={() => dispatch({ type: ACTION_TYPES.SET_FOCUS, value: false })}
                >
                    <svg focusable="false" viewBox="0 0 24 24" width="2em" height="2em" aria-hidden="true">
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                    </svg>
                </ComboBoxButton>
            </Flex>
            <ComboxBoxOptions
                id={`${id}-options`}
                ref={optionsRef}
                role="listbox"
                aria-labelledby={`${id}-label`}
                hidden={!isExpanded}
                onBlur={() => {
                    dispatch({ type: ACTION_TYPES.SET_FOCUS_TRAP, value: FOCUS_TRAPS.COMBOBOX });
                }}
                onKeyDown={handleOptionsKeydown}
            >
                {options.map((option, index) => {
                    return (
                        <ComboBoxListItem
                            tabIndex={-1}
                            key={option}
                            role="option"
                            px={2}
                            py={2}
                            onClick={(event) => {
                                event.preventDefault();
                                dispatch({ type: ACTION_TYPES.SET_INPUT_VALUE, value: option });
                                dispatch({ type: ACTION_TYPES.SET_OPTIONS_VISIBILITY, value: 'hidden' });
                            }}
                            aria-selected={index === activeOptionIndex}
                        >
                            {option}
                        </ComboBoxListItem>
                    );
                })}
            </ComboxBoxOptions>
        </Stack>
    );
}

export default ComboBox;
