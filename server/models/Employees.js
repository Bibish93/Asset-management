const {sequelize, DataTypes} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Employees = sequelize.define("Employees", {
       
        firstname: DataTypes.STRING,
        middlename: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        phoneNo: DataTypes.INTEGER,
        password: DataTypes.STRING,
        department: DataTypes.STRING,

        
    })

    return Employees
}
