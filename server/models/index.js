const dbConfig = require('../config/db.config')

const { Sequelize, DataTypes } = require('sequelize')


const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    port: 3306,
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT
})

const Assets = sequelize.define('Assets', {
    category: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    serialNo: DataTypes.JSON,
    datePurchased: DataTypes.DATEONLY,
    quantity: DataTypes.INTEGER,
    cost: DataTypes.STRING,

    image: DataTypes.BLOB,

  
}) 

const Users = sequelize.define('Users', {
    firstname: DataTypes.STRING,
    middlename: DataTypes.STRING,
    lastname: DataTypes.STRING,
    address: DataTypes.STRING,
    Role: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNo: DataTypes.INTEGER,
    password: DataTypes.STRING,
    department: DataTypes.STRING,
    room: DataTypes.INTEGER,
   

    
})


// Assets.hasMany(Users,{
//     onDelete: "cascade"

// })



const db = {};
db.sequelize = sequelize;
db.models = {};
// db.models.Employees = require('./Employees')(sequelize, Sequelize.DataTypes);
db.models.Assets = Assets
db.models.Users = Users




module.exports = db


