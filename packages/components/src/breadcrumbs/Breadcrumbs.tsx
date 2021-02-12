import React, { SyntheticEvent } from 'react';

import Link from '../link';

import { OrderedList, ListItem } from './styles';

type BreadcrumbsProps = {
    children?: React.ReactNode;
};

type BreadcrumbLinkProps = {
    href: string;
    selected?: boolean;
    children?: React.ReactNode;
    onPress?: (arg: SyntheticEvent) => void;
};

/**
 * A list of links to the parent pages of the current page in hierarchical order.
 * See: https://www.w3.org/TR/wai-aria-practices-1.1/#breadcrumb
 */
function Breadcrumbs({ children }: BreadcrumbsProps): React.ReactElement {
    return (
        <nav aria-label="Breadcrumb">
            <OrderedList>
                {React.Children.map(children, (child) => (
                    <ListItem px={2}>{child}</ListItem>
                ))}
            </OrderedList>
        </nav>
    );
}

function BreadcrumbLink({ href, selected, children, onPress }: BreadcrumbLinkProps): React.ReactElement {
    return (
        <Link
            variant="secondary"
            href={href}
            {...(selected && { 'aria-current': 'page' })}
            inline={selected}
            onPress={onPress}
        >
            {children}
        </Link>
    );
}

export default Object.assign(Breadcrumbs, { Link: BreadcrumbLink });
