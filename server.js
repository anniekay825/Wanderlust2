require("dotenv").config();
const express = require("express");
const passport = require("passport");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

require("./models/User");
require("./services/passport");
require("./routes/authRoutes")(app);

// Set the express-session secret key to the CookieKey env variable
// const sessionKey = process.env.CookieKey;
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const secret = process.env.ClientSecret || "testsecret";
// Define middleware here
app.use(
  express.urlencoded({
    extended: true,
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(passport.initialize());
app.use(passport.session());

// Connect app to mongo db
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/wanderlust2";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to db!");
});

const hour = 36000000;
//Middleware
app.use(
  session({
    secret: secret,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: hour, sameSite: true },
  })
);

// Define API routes here
require("./routes/api-routes.js")(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});