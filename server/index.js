const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express();

const port = 5050

// app.use(express.json());

app.get('/api/products', getProducts)

app.get('/api/products/:theProductId', getProduct)

app.listen(port, () => console.log(`Server running on ${port}`));
