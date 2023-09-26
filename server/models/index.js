const dbConfig = require('../config/db.config')

const { Sequelize } = require('sequelize')


const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT
})


const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.Employees = require('./Employees')(sequelize, Sequelize.DataTypes);
db.models.Assets = require('./Assets')(sequelize, Sequelize.DataTypes);
db.models.Users = require('./Users')(sequelize, Sequelize.DataTypes);

module.exports = db