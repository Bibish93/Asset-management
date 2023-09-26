const sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Assets = sequelize.define('Assets', {
        category: DataTypes.STRING,
        manufacturer: DataTypes.STRING,
        model: DataTypes.STRING,
        serialNo: DataTypes.JSON,
        datePurchased: DataTypes.DATEONLY,
        quantity: DataTypes.INTEGER,
        cost: DataTypes.STRING,
        assignedID: DataTypes.STRING, 
        image: DataTypes.BLOB
    })

    return Assets;
}

