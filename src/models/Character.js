const {DataTypes} = require("sequelize");




module.exports = (sequelize) =>{ //tenemos una funcion que recibe Sequelize y define un modelo
    sequelize.define('Character', {
        id:{
            type: DataTypes.INTEGER,
            allownull: false,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allownull: false,
        },
        status:{
            type: DataTypes.ENUM("Alive", "Dead" , "Unknown"), //enum son valores que se van a poder guardar
            allownull: false,
        },
        species:{
            type: DataTypes.STRING,
            allownull: false,
        },
        gender:{
            type: DataTypes.ENUM("Female", "Male", "Genderless", "Unknown"),
            allownull: false,
        },
        origin:{
            type: DataTypes.STRING,
            allownull: false,
        },
        image:{
            type: DataTypes.STRING,
            allownull: false,
        },

    } , {timestamps: false});
};