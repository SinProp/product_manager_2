const ProductController = require("../controllers/products.controller");


module.exports = (app) => {
    app.post('/api/products', ProductController.addProduct);
    app.get('/api/products', ProductController.getAllProducts);
};