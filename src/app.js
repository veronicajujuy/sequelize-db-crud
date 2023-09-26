const express = require("express");
const mainRouter = require("../routes/mainRoutes");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(mainRouter);
app.listen(3000, () => console.log("corriendo en puerto 3000!"));
