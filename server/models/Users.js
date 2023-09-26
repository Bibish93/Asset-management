const sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Assets = sequelize.define('Users', {
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

    return Assets;
}

