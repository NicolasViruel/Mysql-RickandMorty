const { getCharById } = require("../controllers/getCharById");
const express = require("express");
const characterRouter = express.Router();

characterRouter.get("/:idChar", getCharById);

module.exports = characterRouter;