const {DataTypes} = require("sequelize");




module.exports = (sequelize) =>{
    sequelize.define('User', {
        id:{
            type: DataTypes.UUID, //tipo de dato Hexadecimal
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4 //Genero el Hexadecimal
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isMail: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    } , {timestamps: false});
};