require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pgtools = require("pgtools");
const models = require("./models");
const routes = require("./routes");
const passport = require("passport");
const passportInitialize = require("./config/passport");
const initialSocket = require("./config/socketio");

const app = express();

// Constants

app.options("*", cors());
app.use(cors());
// Wide-open CORS configuration (change before this is considered production-ready)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  next();
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(require("morgan")("dev"));
app.use(require("body-parser").urlencoded({ limit: "50mb", extended: true }));
app.use(require("body-parser").json({ limit: "50mb" }));
app.use(
  require("express-session")({
    secret: "Security123!@#",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(require("cookie-parser")());

// initialize db
app.set("sequelize", models.sequelize);
app.set("models", models.sequelize.models);

models.sequelize
  .sync()
  .then(() => console.log("Sequelize synced"))
  .catch((error) => {
    console.log(error);
  });

// initialize passport
const Users = models.Users;
app.use(passport.initialize());
app.use(passport.session());
passportInitialize(passport, Users);

// initialize route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to test application" });
});

routes(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// socket.io
initialSocket.initSocket(server);
