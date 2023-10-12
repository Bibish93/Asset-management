const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const {models: { Users } } = require('../models')

router.get('/', async (req, res) => {
    const users = await Users.findAll() 
    res.json(users)
})


router.get("/:assetId", async (req, res) => {
    const assetId = req.params.assetId
    const users = await Users.findAll({where: {AssetId: assetId}  })
    res.json(users)
})  




router.post('/', async(req, res)=>{
    const user = req.body
    const password = req.body.password
    
    // await Users.create(user)
    bcrypt.hash(password, 10).then((hash) => {
            Users.create({
            ...user,
            password: hash
        })
        
    })
    
    res.json(user)

    
})




module.exports = router

