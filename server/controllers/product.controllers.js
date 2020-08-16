const Product = require('./../models/product.models');
const {req, res} = require('express');
const { create, update } = require('./../models/product.models');

module.exports.index = (req, res) => {  // see mongoose commands!!
    // index: (req, res) => {  // show all
        
    // }
    // show: (req, res) => {   // show one

    // }
    create: (req, res) => {
        Product.create(req.body)
        .then(data => res.json(data))
        .catch((err) => res.json(err));
    }
    // update: (req, res) => {

    // }
    // delete: (req, res) => {

    // }
}