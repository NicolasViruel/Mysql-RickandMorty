const morgan = require("morgan");
const cors = require("cors");

//Router
// const characterRouter = require("./src/routes/character");
const userRouter = require("./src/routes/user");
// const favoriteRouter = require("./src/routes/favorite");
//Express
const express = require("express");
const server = express();

//Middelwares
server.use(express.json()); //para poder recibir JSON por req.body
server.use(morgan("dev"));

//Permisos cors
server.use(cors()); //Habilito las CORS para que cualquier origen pueda enviar solicitud a mi 

//Routers --> Que rutas voy a utilizar
// server.use("/character", characterRouter);
server.use("/user" , userRouter);
// server.use("/favorites" , favoriteRouter);

server.get("/health-check" , (req, res) =>{
    res.send("Working");
});

module.exports = server