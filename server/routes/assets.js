const express = require('express')
const router = express.Router()

const {models: { Assets } } = require('../models')

router.get('/', async (req, res) => {
    const assets = await Assets.findAll() 
    res.json(assets)
})
router.post('/', async(req, res)=>{
    const asset = req.body
    await Assets.create(asset)
    res.json(asset)

    
})

module.exports = router