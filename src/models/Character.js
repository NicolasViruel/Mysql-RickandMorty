const {Datatypes} = require("sequelize");




module.exports = (sequelize) =>{
    sequelize.define('Character', {
        id:{
            type: Datatypes.INTEGER,
            allownull: false,
            primarykey: true,
        },
        name:{
            type: Datatypes.STRING,
            allownull: false,
        },
        status:{
            type: Datatypes.ENUM("Alive", "Dead" , "Unknown") //enum son valores que se van a poder guardar
        },
        species:{
            type: Datatypes
        },
        gender:{
            type: Datatypes
        },
        origin:{
            type: Datatypes
        },
        image:{
            type: Datatypes
        },

    } , {timestamps: false});
};