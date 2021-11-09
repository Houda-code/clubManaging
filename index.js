const express = require("express");
const app = express();

const mongoose = require("mongoose");

// DB connection
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost:27017/clubsportif-db");
mongoose.connection.on("connected", () => {
  console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
  console.log("there is error in ", err);
});

//import route middlewares
const userRoutes = require("./routes/auth.routes");
const salleRoutes = require("./routes/salles.routes");
const terrainRoutes = require("./routes/terrains.routes");
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes middlewares
app.use("/auth", userRoutes);
app.use("/salle", salleRoutes)
app.use("/terrain", terrainRoutes)

//server listening
const port = 7000;
app.listen(port, () => {
  console.log(`this server is running on port ${port}`);
});