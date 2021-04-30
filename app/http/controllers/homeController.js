const Product = require('../../models/product')
function homeController() {
    return {
        async index(req, res) {
            const products = await Product.find()
            return res.render('home', { products: products })
        }
    }
}

module.exports = homeController