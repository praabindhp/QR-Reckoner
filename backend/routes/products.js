const express = require('express');
const Product = require('../models/Product');
const Cart = require('../models/Cart');

const router = express.Router();

// Route to add a new product
router.post('/product/add', async (req, res) => {
    const { name, price } = req.body;
    const qrCode = `${name}-${price}`;

    const newProduct = new Product({ name, price, qrCode });

    try {
        await newProduct.save();
        res.json(newProduct);
    } catch (err) {
        res.status(500).json({ message: 'Error adding product' });
    }
});

// Route to fetch a product by QR code
router.get('/product/:qrCode', async (req, res) => {
    const product = await Product.findOne({ qrCode: req.params.qrCode });
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

router.post('/cart/add', async (req, res) => {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);

    if (product) {
        let cart = await Cart.findOne();
        if (!cart) {
            cart = new Cart({ products: [], totalPrice: 0 });
        }

        cart.products.push({ productId: product._id, quantity });
        cart.totalPrice += product.price * quantity;
        await cart.save();

        res.json(cart);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

module.exports = router;