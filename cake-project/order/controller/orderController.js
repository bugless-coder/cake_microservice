const orderModel = require('../models/order');
const express = require('express');

// create a controller in express
const router = express.Router();

exports.addItemToCart=(req, res) => {
    let insertObject = {
        cakeid: req.body.cakeid,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
    }
    orderModel.create(insertObject, (err, data)=> {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    })
}