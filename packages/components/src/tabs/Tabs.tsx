import React, { SyntheticEvent, useContext, useEffect, useRef } from 'react';

import Box from '../box/';
import Link from '../link/';

import { keyPress, directions } from '../constants';
import { cloneValidElement, uiid } from '../utils/helpers';
import { TabsListWrapper, TabsWrapper } from './styles';

type TabsProps = {
    children: React.ReactNode;
};

type TabsListProps = {
    children: React.ReactNode;
};

type TabProps = {
    id: string;
    children: React.ReactNode;
    isActive: boolean;
    handleOnPress: (arg: SyntheticEvent) => void;
    handleKeyDown: (arg: SyntheticEvent) => void;
};

type TabPanelProps = {
    id: string;
    children: React.ReactNode;
    isActive: boolean;
    label: string;
};

type TabState = {
    id: string;
    realIndex: number;
};

const TabsContext = React.createContext(null);

/**
 * Provides Context for the Tabs components.
 */
function Tabs({ children }: TabsProps): React.ReactElement {
    const [tabs, setTabs] = React.useState([]);
    const [activeTab, setActiveTab] = React.useState(0);
    const tabsContextValue = {
        tabs,
        setTabs,
        activeTab,
        handleOnPress: (index: number) => setActiveTab(index),
    };
    return <TabsContext.Provider value={tabsContextValue}>{children}</TabsContext.Provider>;
}

/**
 * Renders a List of Tab components.
 */
function TabsList({ children, ...props }: TabsListProps): React.ReactElement {
    const { activeTab, handleOnPress: handleTabChange, setTabs } = useContext(TabsContext);
    function createChildTabs(): Array<TabState> {
        const filteredChildren = [];
        /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
        React.Children.forEach(children, (child: React.ReactElement<any>, index) => {
            if (child.type === Tab) {
                filteredChildren.push({
                    id: `tab-${uiid()}`,
                    realIndex: index,
                });
            }
        });
        return filteredChildren;
    }

    const tabs = React.useMemo(() => createChildTabs(), [children]);

    useEffect(() => {
        setTabs(tabs);
    }, []);

    const handleTabKeydown = React.useCallback((event) => {
        const currentTabIndex = tabs.findIndex((tab) => tab.id === event.target.id);
        const direction = directions[event.keyCode];
        if (direction === keyPress.LEFT || direction === keyPress.RIGHT) {
            event.preventDefault();
            const nextIndex = direction === keyPress.LEFT ? currentTabIndex - 1 : currentTabIndex + 1;
            const atBound = nextIndex > tabs.length - 1 || nextIndex < 0;
            if (atBound) {
                return;
            }
            handleTabChange(nextIndex);
        }
    }, []);

    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    const tabsChildren = React.Children.map(children, (child: React.ReactElement<any>, index) => {
        if (child.type === Tab) {
            const tabItem: TabState = tabs.find((tab) => tab.realIndex === index);
            const tabIndex = tabs.findIndex((tab) => tab.realIndex === index);
            return cloneValidElement(child, {
                isActive: tabIndex === activeTab,
                handleOnPress: () => handleTabChange(tabIndex),
                handleKeyDown: handleTabKeydown,
                id: tabItem.id,
            });
        }
        return child;
    });
    return (
        <TabsListWrapper as="ul" role="tablist" {...props}>
            {tabsChildren}
        </TabsListWrapper>
    );
}

/**
 * Represents an Individual Tab within a List.
 */
export function Tab({ id, children, isActive, handleOnPress, handleKeyDown }: TabProps): React.ReactElement {
    const ownerRef = useRef(null);
    useEffect(() => {
        if (isActive && ownerRef.current) {
            ownerRef.current.focus();
        }
    }, [isActive]);
    return (
        <TabsWrapper isActive={isActive} role="presentation">
            <Link
                ref={ownerRef}
                id={id}
                role="tab"
                variant="secondary"
                href="#"
                onPress={(e) => {
                    e.preventDefault();
                    handleOnPress(e);
                }}
                onKeyDown={handleKeyDown}
                tabIndex={isActive ? 0 : -1}
                aria-selected={isActive}
            >
                {children}
            </Link>
        </TabsWrapper>
    );
}

function TabPanels({ children }: { children: React.ReactNode }): React.ReactElement {
    const { activeTab, tabs } = useContext(TabsContext);
    return (
        <div>
            {React.Children.map(children, (child, index) => {
                const tab = tabs[index];
                if (tab) {
                    return cloneValidElement(child, {
                        isActive: index === activeTab,
                        id: `tabpanel-${index + 1}`,
                        label: tab.id,
                    });
                }
                return child;
            })}
        </div>
    );
}
/**
 * Associated content for a Tab
 */
function TabPanel({ id, children, isActive, label }: TabPanelProps): React.ReactElement {
    return (
        <Box id={id} hidden={!isActive ? true : false} role="tabpanel" aria-labelledby={label}>
            {children}
        </Box>
    );
}

export default {
    Container: Tabs,
    List: TabsList,
    Tab: Tab,
    Panels: TabPanels,
    Panel: TabPanel,
};
