const { query } = require('express')
const express = require('express')
const {DataTypes } = require('sequelize')
// const { default: Reservations } = require('../../client/safe_asset/src/pages/Current_actions/Reservations')
const router = express.Router()
const {sequelize: sequelize} = require('../models')
const {models: { Assets } } = require('../models')
const {models: { Users } } = require('../models')

const {validationToken} = require("../Middleware/authMiddleware")

router.get('/', async (req, res) => {
    const assets = await Assets.findAll() 
    res.json(assets)
})
router.post('/', async(req, res)=>{
    const asset = req.body
    await Assets.create(asset)
    res.json(asset)

    
})


const asset_user = sequelize.define('asset_user', {
    assetuserId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {timestamps: false})


const Reservation = sequelize.define('reservation', {
    ReservationId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ReservationDate: {
        type: DataTypes.STRING
    }
},{timestamps: false} )

Assets.belongsToMany(Users, {through: asset_user})
Users.belongsToMany(Assets, {through: asset_user})


Assets.belongsToMany(Users, { as: "Reserve", through: Reservation, foreignKey: 'assetId' });
Users.belongsToMany(Assets, { as: "Reserve", through: Reservation, foreignKey: 'userId' });



Users.prototype.getAsset = async function () {
    return await this.getAssets()
  }
  


router.post('/associate', async (req, res) =>{

    const user = await Users.findOne({where: {id: req.body.userId}})
    const asset = await Assets.findOne({where: {id: req.body.assetId}})
    await user.addAsset(asset)

    res.send("success")
 
    
})


router.get('/associate', async (req, res) => {
    const users = await Users.findAll({ 
        include: [
            {
                model: Assets,
                attributes: ['id', "model"]
            }
        ] })
    
  const associates = [];

  for (const user of users) {
    if (user.Reserve?.length > 0) {
      const association = {
        name: `${user.firstname} ${user.middlename} ${user.lastname}`,
        department: user.department,
        room: user.room,
        asset: user.Assets,
      }

    associates.push(association);
  }
}
    res.json(associates)
})



router.post('/reserve', async (req, res) =>{

    const user = await Users.findOne({where: {id: req.body.userId}})
    const asset = await Assets.findOne({where: {id: req.body.assetId}})
    const reservationDate = req.body.ReservationDate
    await user.addReserve(asset, {through: {ReservationDate: reservationDate}})
    

    res.send("success")
 
    
})




router.get('/reserve', async (req, res) => {
    const users = await Users.findAll({ 
        include: [
            {
                model: Assets,
                attributes: ['id', "model", ],
                through: {
                    attributes: ['ReservationDate']
                },
                as: "Reserve",

                
                
                
            }
        ] })
    
  const associates = [];

  for (const user of users) {
    if(user.Reserve?.length > 0){

        const association = {
          id: user.id,
          name: `${user.firstname} ${user.middlename} ${user.lastname}`,
          department: user.department,
          room: user.room,
          asset: user.Reserve,
          reservationDate: user.ReservationDate
        }
        associates.push(association);
    }

    

      

      

  } 
    res.json(associates)
})

module.exports = router