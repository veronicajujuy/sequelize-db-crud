# SEQUELIZE

## Instalación

```bash
npm install sequelize-cli -g
npm install sequelize@5.21
npm install mysql2

```

## Configuración

1. Crear el archivo **.sequelizerc** en la raiz del proyecto y dentro escribir lo siguiente:

```js
const path = require("path");
module.exports = {
  config: path.resolve("./database/config", "config.js"),
  "models-path": path.resolve("./database/models"),
  "seeders-path": path.resolve("./database/seeders"),
  "migrations-path": path.resolve("./database/migrations"),
};
```

2. Inicializar sequelize

En la terminal ejecutar el siguiente comando

```bash
Sequelize init
```

Podemos observar que se crean varias carpetas que nos servirán para trabajar con el ORM.

3. Modificar el archivo config.js
   Dentro de la carpeta database/config, encontraremos el archivo config.js el cual tendra el siguiente código:

```js
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

hay que agregar al mismo module.exports y nos quedará de esta manera:

```js
module.exports = {
  development: {
    username: "root",
    password: null,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
```

4. Configurar con que base de datos queremos trabajar:
   En este apartado de config.js, tenemos que agregar con que base de datos vamos a trabajar. Nosotros trabajaremos con la base de datos movies_db:

```js
development: {
    username: "root",
    password: null,
    database: "movies_db",
    host: "127.0.0.1",
    dialect: "mysql",
  },
```

5. Creación de modelos

El modelo es la **representación de nuestra tabala en código**. En la carpeta **/database/models** debemos crear los modelos con _extensión .js y con formato UpperCamelCase y en singular_
Por ejemplo, yo quiero definir el modelo de la tabla **movie** de la base de datos movie_db, para ello creo un modelo:

```js
const Model = sequelize.define(aliasTabla, cols);
```

```js
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
```

# Consultar las tablas de la base de datos:

## findAll():

Trae todos los registros de una tabla:

```js
const db = require("../database/models");
db.Movie.findAll().then((result) => console.log(result));
```

Como es una promesa, al resultado del findAll, debemos luego encadenarlo al .then para extraer el mismo.

De Igual modo utilizaremos los demas métodos para obtener los datos de nuestra base de datos.
Es importante que si queremos obtener solo los datos pongamos el objeto _{raw: true}_

```js
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
```
