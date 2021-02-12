import React from 'react';

import Breadcrumbs from '../';

export default {
    title: 'Breadcrumbs',
    component: Breadcrumbs,
    argTypes: {},
};

const Default = () => {
    const [activeLink, setActiveLink] = React.useState('#writing');
    const links = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#writing', label: 'Writing' },
    ];
    return (
        <Breadcrumbs>
            {links.map((link) => (
                <Breadcrumbs.Link
                    key={link.label}
                    href={link.href}
                    selected={link.href === activeLink}
                    onPress={(event) => {
                        event.preventDefault();
                        setActiveLink(link.href);
                    }}
                >
                    {link.label}
                </Breadcrumbs.Link>
            ))}
        </Breadcrumbs>
    );
};

export const Standard = Default.bind({});
