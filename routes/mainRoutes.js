const express = require("express");
const mainController = require("../controllers/mainController");
const mainRouter = express.Router();

mainRouter.get("/", mainController.getAllMovies);
mainRouter.get("/movies/create", mainController.createMovieForm);
mainRouter.post("/movies/create", mainController.createMovieDB);
mainRouter.get("/movies/edit/:id", mainController.editMovieForm);
mainRouter.post("/movies/edit/:id", mainController.editMovieDB);
mainRouter.post("/movies/delete/:id", mainController.deleteMovieDB);

mainRouter.get("/movies/:id", mainController.getOneMovie);

module.exports = mainRouter;
