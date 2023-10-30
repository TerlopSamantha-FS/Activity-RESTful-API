const express = require('express')
const router = express.Router()
const productCtrl = require('../controllers/Products')

router.get('/', productCtrl.index)
router.get('/:id', productCtrl.show)
router.post('/', productCtrl.create)
router.post('/:id', productCtrl.update)
router.post('/:id/delete', productCtrl.remove)

module.exports = router