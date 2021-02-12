import React from 'react';

export function cloneValidElement<Props>(
    element: React.ReactElement<Props> | React.ReactNode,
    props?: Partial<Props> & React.Attributes,
    ...children: React.ReactNode[]
): React.ReactElement<Props> | React.ReactNode {
    return React.isValidElement(element) ? React.cloneElement(element, props, ...children) : element;
}

export function uiid(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
