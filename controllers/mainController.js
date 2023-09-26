const db = require("../database/models");
const mainController = {
  getAllMovies: (req, res) => {
    db.Movie.findAll({ raw: true })
      .then((result) => {
        res.render("getAll", { movies: result });
      })
      .catch((error) => res.send(error));
  },
  getOneMovie: (req, res) => {
    const id = req.params.id;
    db.Movie.findByPk(id, { raw: true })
      .then((result) => res.render("getOne", { movie: result }))
      .catch((error) => res.send(error));
  },
};

module.exports = mainController;
