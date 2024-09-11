import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import axios from 'axios';
import { Typography } from '@mui/material';

const ProductScanner = ({ onProductScanned }) => {
    const [error, setError] = useState(null);

    const handleScan = async (data) => {
        if (data) {
            try {
                const response = await axios.get(`http://localhost:5000/api/product/${data.text}`);
                onProductScanned(response.data);
            } catch (err) {
                setError('Product not found');
            }
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    const previewStyle = {
        height: 240,
        width: 320,
    };

    return (
        <div>
            <Typography variant="h5">Scan Product QR Code</Typography>
            <QrScanner
                delay={300}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
            />
            {error && <Typography color="error">{error}</Typography>}
        </div>
    );
};

export default ProductScanner;