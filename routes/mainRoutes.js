const express = require("express");
const mainController = require("../controllers/mainController");
const mainRouter = express.Router();

mainRouter.get("/", mainController.getAllMovies);
mainRouter.get("/movies/:id", mainController.getOneMovie);

module.exports = mainRouter;
