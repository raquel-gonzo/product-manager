
const ProductController = require('../controllers/product.controllers');

module.exports = function(app){
    app.post("/api/product", ProductController.create)
};