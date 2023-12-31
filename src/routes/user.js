const { login, createUser, getUsers, updater, deleter, truncateModel } = require("../controllers/login");

const userRouter = require("express").Router();

userRouter.get("/login", login);

userRouter.post("/create", async (req ,res ) =>{
    const {userToBeCreate} = req.body;

    if (userToBeCreate.email) {
        try {
            const creation = await createUser(userToBeCreate);
            res.json({msg: "Created" , data: creation});
        } catch (error) {
            console.log(error);
            res.send(error); 
        }
    }
})

userRouter.get("/get" , async (req, res) =>{
    try {
        const usuarios = await getUsers() // User.findAll pero la logica en otra funcion
        return res.json(usuarios)
    } catch (error) {
        return res.json(error);
    }
});

userRouter.put("/update" , async (req ,res) =>{
    const {obj} = req.body
    try {
        const update = await updater(obj);
        return res.json(update);
    } catch (error) {
        return res.json(error);
    }
})

userRouter.delete("/delete", async (req, res) =>{
    const {id} = req.query;
    try {
        const userDeleted = await deleter(id)
        return res.json(userDeleted);
    } catch (error) {
        return (error);
    }
});

userRouter.delete("/truncate", async (req, res) =>{
    try {
        res.json(await truncateModel());
    } catch (error) {
        return (error);
    }
})

module.exports = userRouter;