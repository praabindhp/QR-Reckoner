import React from 'react';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <Box mt={2} mb={4}>
        <Button variant="contained" color="primary" component={Link} to="/">
            Checkout
        </Button>
        <Button
            variant="contained"
            color="secondary"
            component={Link} to="/generate"
            style={{ marginLeft: '10px' }}
        >
            Generate QR Code
        </Button>
    </Box>
);

export default Navigation;