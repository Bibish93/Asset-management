const express = require('express')
const router = express.Router()
const {models: { Employees } } = require('../models')
// const  Employees  = require('../models/Employees')(sequelize, DataTypes); 
// const  Employees  = require('../models/Employees').Employees; 


router.get('/', async (req, res) => {
    // const employees = await Employees.findAll()
    // res.json(employees)
    res.send('hii')
})
router.post('/', async(req, res)=>{
    const employee = req.body
    await Employees.create(employee)
    res.json(employee)

    
})

module.exports = router



