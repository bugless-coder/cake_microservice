const orderModel = require('../models/order');
const express = require('express');

// create a controller in express
const router = express.Router();

exports.addItemToCart = (req, res) => {
    let insertObject = {
        cakeid: req.body.cakeid,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
    }
    orderModel.create(insertObject, (err, data) => {
        if (err) {
            console.log("error : ", err);
            res.json(err);
        } else {
            console.log('data inserted', data);
            res.json(data);
        }
    })
}

// export display order function to orderController
exports.displayOrder = (req, res) => {
    orderModel.find({}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    }
    )
}

// export a delete item from cart function to orderController
exports.deleteItemFromCart = (req, res) => {
    console.log('delete item from cart');
    console.log(req.params.id);
    orderModel.remove({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    }
    )
}

// edit item in cart
exports.editItemInCart = (req, res) => {
    orderModel.findOneAndUpdate({ _id: req.params.id }, req.body, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    }
    )
}


// export a checkout function to orderController
exports.checkout = (req, res) => {
    orderModel.find({}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    }).sort({ _id: -1 }).limit(1);
}
