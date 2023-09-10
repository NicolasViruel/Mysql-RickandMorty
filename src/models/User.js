const {Datatypes} = require("sequelize");




module.exports = (sequelize) =>{
    sequelize.define('User', {
        id:{
            type: Datatypes.INTEGER, //tipo de dato hexadecimales
            primaryKey: true,
            allowNull: false,
            autoincrement: true
        },
        email:{
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            isMail: true,
        },
        password:{
            type: Datatypes.STRING,
            allowNull: false,
        }
    } , {timestamps: false});
};