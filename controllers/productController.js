
const { products } = require('../models')
const db = require('../models')

const Product = db.products
const Review = db.reviews

const addProduct = async (req, res) => {

    let info = {
        title: req.body.title,
        price: req.body.price,
        decription: req.body.decription,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)

}

const getAllProducts = async (req,res) => {

    let product = await Product.findAll({})
    res.status(200).send(products)
}


const getOneProduct = async (req,res) => {

    let id = req.params.id
    let product = await Product.findOne({where: {id: id}})
    res.status(200).send(product)
}

const updateProduct = async (req,res) => {

    let id = req.params.id
    
    const product = await product.update(req.body, { where: { id: id}})
    res.status(200).send(product)

}

const deleteProduct = async (req,res) => {

    let id = req.params.id
    await Product.destroy({where: { id: id}})

    res.status(200).send('product has been deleted')
}

const getPublishedProduct = async (req,res) => {

  
    const product = await product.findAll(req.body, { where: { published: true}})
    res.status(200).send(products)

}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    getPublishedProduct,
    deleteProduct
}