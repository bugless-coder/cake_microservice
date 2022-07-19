const cakeModel = require('../models/cake');
const express = require('express');

// create a controller in express
const router = express.Router();
const data = require('../models/data');
const cake = require('../models/cake');
exports.getAllCakes = (req, res) => {
    console.log('get all cakes');
    cakeModel.find({}, (err, cakes) => {
        console.log("Cakes : ", cakes);
        if (err) {
            console.log("Error : ", err);
            res.send(err);
        } else {
            res.json(cakes);
        }
    });
}

exports.getCakeByName = (req, res) => {
    cakeModel.find({ name: req.params.name }, (err, cakes) => {
        if (err) {
            res.send(err);
        } else {
            res.json(cakes);
        }
    });
}
exports.getCakeByPrice = (req, res) => {

    let min = parseInt(req.params.min);
    let max = parseInt(req.params.max);
    cakeModel.find({}, (err, cakes) => 
        {
        if (err) {
            res.send(err);
        } else {

            // let result = cakes.filter(cake => cake.price >= min && cake.price <= max);
            let filteredCakes = []
            cakes.forEach(element => {
                if (parseInt(element.price) >= min && parseInt(element.price) <= max) 
                {
                    // console.log(element.price);
                    filteredCakes.push(element);
                } else 
                {
                
                }
            });
            res.json(filteredCakes);
        }
    });
}

//add cake to the cart
exports.addItemToCart = (req, res) => {
     //console.log("Add Item to the basket...");
     cakeModel.create({ name: req.params.name }, (err, cakes) => {
        if (err) {
            res.send(err);
        } else {
            res.json(cakes);
        }
    })
   }