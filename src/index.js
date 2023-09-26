const db = require("../database/models");

// find All
db.Movie.findAll({ raw: true })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// find One:

db.Movie.findOne({
  where: {
    title: "Avatar",
  },
  raw: true,
})
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// findbypk

db.Movie.findByPk(12, { raw: true })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
