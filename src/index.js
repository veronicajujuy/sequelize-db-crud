const db = require("../database/models");

// // find All
// db.Movie.findAll({ raw: true })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// // find One:

// db.Movie.findOne({
//   where: {
//     title: "Avatar",
//   },
//   raw: true,
// })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// // findbypk

// db.Movie.findByPk(12, { raw: true })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// create

// db.Movie.create({
//   title: "Barbie",
//   rating: 9.5,
//   awards: 0,
//   release_date: "2023-08-25",
// })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// update

// db.Movie.update(
//   {
//     title: "Barbie: the movie",
//     rating: "9.8",
//   },
//   {
//     where: {
//       id: 22,
//     },
//   }
// )
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//

db.Movie.destroy({
  where: {
    id: 22,
  },
})
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
