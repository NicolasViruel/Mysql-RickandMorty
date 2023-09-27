const allowendUsers = require("../utils/allowendUsers");
const { User } = require("../DB_Connections");

function login(req, res) {
    const {email , password } = req.query;
    let access = false;

    allowendUsers.forEach((user) =>{
        if (user.email === email && user.password === password) {
            access = true;
        }
    });
;}

async function createUser(obj) {
    try {
        const newUser = await User.create(obj); // Usar User.create para crear un usuario
        console.log(newUser.id);
        return newUser;
    } catch (error) {
        throw error; // Lanzar el error para que se maneje adecuadamente
    }
}

async function getUsers() {
    try {
        const users = await User.findAll()
        return users;
    } catch (error) {
        console.log(error);
        return error   
    }
}

async function updater(obj, id) {
    try {
        const update = await User.update(obj , {where: {password: "123456"}});
        return update
    } catch (error) {
        return error
    }
}

async function deleter(id) {
    try {
        const user = await User.findByPk(id);
        user.destroy();
        return "ok";
    } catch (error) {
        return error;
    }
}
//borra varios usuarios
async function truncateModel() {
    try {
        return await User.truncate()
    } catch (error) {
        return error;
    }
}
module.exports = {login , createUser, getUsers, updater, deleter , truncateModel};