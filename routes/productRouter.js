const productController = require ('../controllers/productController.js')

const router = require('express').Router()

router.post('/addProduct', productController.addProduct)

router.get('/allProduct', productController.getAllProducts)

router.get('/publishedProduct', productController.getPublishedProduct)

router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/addProduct', productController.deleteProduct)

module.exports = router