
const ProductController = require('../controllers/product.controllers');

module.exports = function(app){
    app.post("/api/products/new", ProductController.create);
    app.get("/api/products/", ProductController.findAllProducts);
    app.get("/api/products/:id", ProductController.findOne);
    app.put("/api/products/update:id", ProductController.updateExistingProduct);
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
};