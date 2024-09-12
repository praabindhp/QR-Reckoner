const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/products');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://praabindhp:cKduzNatGMMUdJbL@nodedb-cluster.bomq77w.mongodb.net/?retryWrites=true&w=majority&appName=nodedb-cluster/qr-reckoner');

// API routes
app.use('/api', productRoutes);

app.listen(8080, () => console.log('Server running on port 8080'));
