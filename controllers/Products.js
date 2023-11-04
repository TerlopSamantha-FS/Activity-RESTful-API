const Products = require('../models/Products')

const index = (req, res) => {
    const products = Products.all()
    res.render('views/products/index', { products })
    //res.json(products)
}

const form = (req, res) => {
    // res.send('Products.form')
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
    // res.json(products)
}

const create = (req, res) => {
    const products = Products.create(req.body)
    // res.json(products)
    res.redirect('/products/' + products.id)
}

const update = (req, res) => {
    const products = Products.update(req.params.id, req.body)
    //res.json(products)
    res.redirect('/products/' + req.params.id)
}

const remove = (req, res) => {
  const products = Products.remove(req.params.id)
//   res.json(products)
res.redirect('/products/' + req.params.id)
}



module.exports = { index, form, show, create, update, remove }