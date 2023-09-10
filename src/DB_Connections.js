require('dotenv').config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const {User} = require("./models/User")
const {Character} = require("./models/Character")

const sequelize = new Sequelize(
    ` mysql://${"root"}:${"pichones1"}@${"localhost"}/rickandmorty`,
    //URL
    { loadding: false, native: false, host: DB_HOST, dialect:"mysql"}
);

// async function testConnection(){
//     try {
//         await sequelize.authenticate()
//         console.log("Conexion a la DB ok :D");
//     } catch (error) {
//         console.log("No se pude conectar :(");
//     }
// }

// testConnection();

User(sequelize); //traemos la instancia de sequelize

module.exports={
    //User,
    //Favorite,
    conn: sequelize,
}