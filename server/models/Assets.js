const {Sequelize, DataTypes} = require('sequelize');



module.exports = (sequelize, DataTypes) => {
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

    
    Assets.associate = (models) => {
        Assets.hasOne(models.Users, {

            onDelete: "cascade",
        })
    }

    return Assets;  
}
 


     
    


 
  
