require("dotenv").config();
const { PORT } = process.env;
const { conn } = require("./src/DB_Connections");
const server = require("./app");

// ---- Servidor ==> Base de datos
// server.listen(PORT, async () => {
//   // await conn.sync( { force: true }); //en cada SYNC Elimina las tablas y sus registros y las vuelve a crear
//   await conn.sync({ alter: true }); //en cada SYNC Altera las tablas y hace sus cambios (si por ej agregamos un atributo)
//   console.log("Db sync");
//   console.log("Server raised in port " + PORT);
// });

// ---- Base de datos ==> Servidor
conn
  .sync({ alter: true })
  .then((value) => {
    server.listen(PORT, () => {
      console.log("Server & DDBB Running 🛴");
    });
  })
  .catch((err) => console.log(err));
