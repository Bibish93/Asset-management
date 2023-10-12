const express = require('express')
const router = express.Router()
const {models: { Employees } } = require('../models')
// import bcrypt from('bcrypt')
// const  Employees  = require('../models/Employees')(sequelize, DataTypes); 
// const  Employees  = require('../models/Employees').Employees; 


router.get('/', async (req, res) => {
    // const employees = await Employees.findAll()
    // res.json(employees)
    res.send('hii')
})
router.post('/', async(req, res)=>{
    const employee = req.body
    const password = req.body.password
    await Employees.create(employee)
    // bcrypt.hash(password, 10).then((hash) => {
    //     await Employees.create({
    //         ...employee,
    //         password: hash
    //     })
        
    // })
    res.json(employee)

    
})

module.exports = router



