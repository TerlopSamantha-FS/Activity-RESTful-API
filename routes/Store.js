const express = require('express')
const router = express.Router()
const storeCtrl = require('../controllers/Store')

router.get('/', storeCtrl.index)
router.get('/products/:slug', storeCtrl.show)

module.exports = router
