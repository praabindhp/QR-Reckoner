const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/products');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/qrcheckout');

// API routes
app.use('/api', productRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));