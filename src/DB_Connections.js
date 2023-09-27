require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

//----- Sequelize
const { Sequelize } = require("sequelize");
const defineModelUser = require("./models/User");
const defineModelCharacter = require("./models/Character");

const sequelize = new Sequelize(
    ` mysql://${"root"}:${"pichones1"}@${"localhost"}/rickandmorty`,
    //URL
    { loadding: false, native: false, host: DB_HOST, dialect:"mysql", logging: false }
);


defineModelUser(sequelize)
defineModelCharacter(sequelize)

//traemos la instancia de sequelize
const { User , Character }= sequelize.models;
//generamos la relacion (muchos a muchos) generando una tabla intermedia
User.belongsToMany(Character, {through: "user_favorite" });
Character.belongsToMany(User, {through: "user_favorite" });

module.exports={
    User,
    Character,
    conn: sequelize,
}