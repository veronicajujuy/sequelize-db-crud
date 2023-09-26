module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.FLOAT,
      },
      awards: {
        type: DataTypes.INTEGER,
      },
      release_date: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "movies",
      timestamps: false,
    }
  );
  return Movie;
};
