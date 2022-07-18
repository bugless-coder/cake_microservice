const express = require('express')

var router = express.Router();

var cakeController = require('../controller/orderController');

// add items to basket
router.post('/add/:name', orderController.addItemToCart);

// display items in the basket
router.get('/display', orderController.displayOrder);

// checkout
router.get('/', orderController.checkout);


module.exports = router;