import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react'; // Use QRCodeCanvas

const GenerateQRCode = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [qrCodeValue, setQrCodeValue] = useState('');

    const handleGenerateQRCode = () => {
        const productDetails = {
            name: productName,
            price: productPrice,
        };
        setQrCodeValue(JSON.stringify(productDetails));
    };

    return (
        <Box>
            <Typography variant="h5" mb={2}>Generate QR Code for Product</Typography>
            <TextField
                label="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Product Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleGenerateQRCode}
                style={{ marginTop: '20px' }}
            >
                Generate QR Code
            </Button>
            {qrCodeValue && (
                <Box mt={4}>
                    <Typography variant="h6">QR Code for {productName}</Typography>
                    <QRCodeCanvas value={qrCodeValue} /> {/* Use QRCodeCanvas here */}
                </Box>
            )}
        </Box>
    );
};

export default GenerateQRCode;