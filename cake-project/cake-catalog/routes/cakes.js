const express = require('express')

var router = express.Router();

var cakeController = require('../controller/cakeController');


// get all cakes
router.get('/', cakeController.getAllCakes);

// get all cakes by name
router.get('/:name', cakeController.getCakeByName);

// get all cakes by price range
router.get('/price/:min/:max', cakeController.getCakeByPrice);

// add item to the basket
router.post('/add/:name', cakeController.addItemToCart);

module.exports = router;