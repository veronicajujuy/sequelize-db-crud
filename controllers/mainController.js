const db = require("../database/models");
const mainController = {
  getAllMovies: (req, res) => {
    db.Movie.findAll()
      .then((result) => {
        res.render("getAll", { movies: result });
      })
      .catch((error) => console.log(res.send(error)));
  },
};

module.exports = mainController;
