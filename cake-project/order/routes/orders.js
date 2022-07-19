const express = require('express')

var router = express.Router();

var orderController = require('../controller/orderController');

// create get request 
router.get('/', (req, res) => res.send("order api is working fine"));
// add items to basket
router.post('/add/:name', orderController.addItemToCart);

// display items in the basket
router.get('/display', orderController.displayOrder);

// edit item in the basket
router.put('/edit/:id', orderController.editItemInCart);

// delete items from the basket
router.delete('/delete/:id', orderController.deleteItemFromCart);

// checkout
router.get('/checkout', orderController.checkout);


module.exports = router;