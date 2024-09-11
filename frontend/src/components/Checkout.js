import React, { useState } from 'react';
import { Typography, List, ListItem, Button, Box } from '@mui/material';
import ProductScanner from './ProductScanner';

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const handleProductScanned = (product) => {
        setCart([...cart, product]);
        setTotal(total + product.price);
    };

    return (
        <Box>
            <ProductScanner onProductScanned={handleProductScanned} />
            <Typography variant="h6">Checkout</Typography>
            <List>
                {cart.map((product, index) => (
                    <ListItem key={index}>{product.name} - ${product.price}</ListItem>
                ))}
            </List>
            <Typography variant="h6">Total: ${total}</Typography>
            <Button variant="contained" color="primary">Proceed to Pay</Button>
        </Box>
    );
};

export default Checkout;