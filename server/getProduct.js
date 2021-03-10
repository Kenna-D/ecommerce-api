const products = require('../products.json');

const getProduct = (req, res) => {
  const product = products.find((val) => val.id === parseInt(req.params.theProductId))
  if(!product) {
    res.status(500).send('Item not on list')
  }else{
    res.status(200).send(product)
  }
}

module.exports = getProduct