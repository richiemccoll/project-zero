import React from 'react';
import { fireEvent, cleanup } from '@testing-library/react';
import { renderWithTheme as render } from '@Utils/test-utils';
import { axe } from 'jest-axe';

import Box from '../../box';
import Button from '../../button';

import Alert from '../';

// .. we don't need no proptypes
//eslint-disable-next-line
function Ui({ type }) {
    const [isAlertVisible, setAlertVisible] = React.useState(false);
    return (
        <Box>
            <Button onClick={() => setAlertVisible(true)}>Show Alert</Button>
            <Alert type={type} active={isAlertVisible}>
                Alert Visible
            </Alert>
        </Box>
    );
}

describe('Alert', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should have no accessibility issues', async () => {
        const { getByText, container, queryByText } = render(<Ui />);
        const button = getByText('Show Alert');
        expect(queryByText('Alert Visible')).not.toBeInTheDocument();
        fireEvent.click(button);
        getByText('Alert Visible');
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it('should render a status alert by default', () => {
        const { getByText, queryByText } = render(<Ui />);
        const button = getByText('Show Alert');
        expect(queryByText('Alert Visible')).not.toBeInTheDocument();
        fireEvent.click(button);
        const alert = getByText('Alert Visible');
        expect(alert).toHaveAttribute('role', 'status');
        expect(alert).toHaveAttribute('aria-live', 'polite');
    });

    it('should also handle assertive alerts', () => {
        const { getByText, queryByText } = render(<Ui type="error" />);
        const button = getByText('Show Alert');
        expect(queryByText('Alert Visible')).not.toBeInTheDocument();
        fireEvent.click(button);
        const alert = getByText('Alert Visible');
        expect(alert).toHaveAttribute('role', 'alert');
        expect(alert).toHaveAttribute('aria-live', 'assertive');
    });
});
