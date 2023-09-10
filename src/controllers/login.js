const allowendUsers = require("../utils/allowendUsers");

function login(req, res) {
    const {email , password } = req.query;
    let access = false;

    allowendUsers.forEach((user) =>{
        if (user.email === email && user.password === password) {
            access = true;
        }
    });
;}