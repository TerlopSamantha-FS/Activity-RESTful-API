const Products = require('../models/Products')

const index = (req, res) => {
    const products = Products.all()
    res.render('views/products/index', { products })
}

const form = (req, res) => {
    if (req.params.id) {
        const products = Products.find(req.params.id)
        res.render('views/products/edit', { products })
    } else{
        res.render('views/products/create')
    }
}

const show = (req, res) => {
    const products = Products.find(req.params.id)
   res.render('views/products/show', { products })
}

const create = (req, res) => {
    const products = Products.create(req.body)
    res.redirect('/products/' + products.id)
}

const update = (req, res) => {
    const products = Products.update(req.params.id, req.body)
    res.redirect('/products/' + req.params.id)
}

const remove = (req, res) => {
    const products = Products.remove(req.params.id)
    res.render('views/products/remove')
}

module.exports = { index, form, show, create, update, remove }