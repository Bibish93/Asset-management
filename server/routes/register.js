const express = require('express')
const router = express.Router()

const {models: { Users } } = require('../models')

router.get('/', async (req, res) => {
    const users = await Users.findAll() 
    res.json(users)
})
router.post('/', async(req, res)=>{
    const user = req.body
    await Users.create(user)
    res.json(user)

    
})

module.exports = router