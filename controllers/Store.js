const { Product, Variant, Image } = require('../models')

const index = async (req, res) => {
	const products = await Product.findAll({
		include: [
			{ model: Variant, include: [Image] }
		]
	})
	res.render('views/store/index', { products })
}

const show = async (req, res) => {
	const product = await Product.findOne({ 
		where: { slug: req.params.slug },
		include: [
			{ model: Variant, include: [Image] }
		]
	})

    try {
        let variant = product.Variants[0]

        if (req.query.v) {
            variant = product.Variants.find(v => v.slug === req.query.v)
        }
    
        res.render('views/store/show', { product, variant })
    } catch(e) {
        console.error(e);
    }

}

module.exports = { index, show }