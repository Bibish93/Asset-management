const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const {models: { Users } } = require('../models')
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
    const { email, password } = req.body;
  
    
      const user = await Users.findOne({ where: { email } });
  
      if (!user) {
        res.json({ error: 'User not found' });
        return;
      }
  
      const match = await bcrypt.compare(password, user.password);
  
      if (!match) {
        res.json({ error: 'Wrong credentials' });
        return;
      }
  
      const accessToken = jwt.sign({
        email: user.email,
        id: user.id,
      }, 'privateKey');
  
      res.json(accessToken);
    
  });

router.get('/', async (req, res) => {
    res.json("")
})



module.exports = router