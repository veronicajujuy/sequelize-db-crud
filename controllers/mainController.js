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
  createMovieForm: (req, res) => {
    res.render("createForm");
  },
  createMovieDB: (req, res) => {
    const newMovie = req.body;
    db.Movie.create({
      ...newMovie,
    })
      .then(res.redirect("/"))
      .catch((error) => res.send(error));
  },
  editMovieForm: (req, res) => {
    const id = req.params.id;
    db.Movie.findByPk(id, { raw: true })
      .then((result) => {
        res.render("editForm", { movie: result });
      })
      .catch((error) => res.send(error));
  },
  editMovieDB: (req, res) => {
    db.Movie.update(
      {
        ...req.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((result) => res.redirect("/"))
      .catch((error) => console.log(error));
  },
  deleteMovieDB: (req, res) => {
    db.Movie.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((result) => res.redirect("/"))
      .catch((error) => console.log(error));
  },
};

module.exports = mainController;
