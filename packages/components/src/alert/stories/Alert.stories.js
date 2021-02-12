import React from 'react';

import Box from '../../box';
import Button from '../../button';
import Stack from '../../stack';
import Text from '../../text';

import Alert from '../';

export default {
    title: 'Alert',
    component: Alert,
    argTypes: {},
};

const TIMEOUT = 3000;

// .. we don't need no proptypes
//eslint-disable-next-line
function DefaultTemplate({ type = 'info' }) {
    const [isAlertVisible, setAlertVisible] = React.useState(false);

    React.useEffect(() => {
        let timeoutHandler = null;

        if (isAlertVisible) {
            timeoutHandler = window.setTimeout(() => {
                setAlertVisible(false);
            }, TIMEOUT);
        }
        return () => {
            window.clearTimeout(timeoutHandler);
        };
    }, [isAlertVisible]);
    return (
        <Box maxWidth="500px">
            <Stack>
                <Button variant="light" onClick={() => setAlertVisible(true)}>
                    Show Alert
                </Button>

                <Alert type={type} active={isAlertVisible}>
                    <Text>This is a {type} alert</Text>
                </Alert>
            </Stack>
        </Box>
    );
}

export const Default = DefaultTemplate.bind({ type: 'info' });
