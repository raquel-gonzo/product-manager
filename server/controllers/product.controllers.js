const Product = require('./../models/product.models');
const {req, res} = require('express');
const { create, update } = require('./../models/product.models');

//mongoose commands

module.exports.create = (req, res) => {
    Product.create(req.body)
    .then(data => res.json(data))
    .catch((err) => res.json(err));
};

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json({ products: allProducts}))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.findOne = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(oneProduct => res.json({ product: oneProduct}))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedProduct => res.json({ product: updatedProduct}))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(result => res.json({ result: result}))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};