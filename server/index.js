const path = require("path");
const express = require("express");
const volleyball = require("volleyball");
const compression = require("compression");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const {User} = require("./db/models/user");

//secrets file
require("dotenv").config();
const app = express();
const PORT = process.env.SERVER_PORT || 5000;

// logging middleware
// Only use logging middleware when not running tests
const debug = process.env.NODE_ENV === "test";
app.use(volleyball.custom({
    debug
}));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// compression middleware (make things smaller before sending to network)
app.use(compression());

// static middleware
app.use("/static", express.static(path.join(__dirname, "../public")));

// cookie middleware 
app.use(cookieParser());

//connecting to database
const uri = process.env.NODE_ENV === "development" ? "mongodb://localhost:27017/cool-places" : process.env.DB_SECRET;
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useCreateIndex: true,  
    useUnifiedTopology: true 
});
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", ()  => {
  console.log("we are connected");
});

// session middleware with passport
app.use(session({
    secret: process.env.SECRET_KEY, 
    saveUninitialized : true, 
    resave : true, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 //one week
    },
    store: new MongoStore({mongooseConnection: connection})
}));

//passport.serializeUser((user, done) => done(null, user.id))
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes
app.use("/api/friends", require("./api/friends")); 
app.use("/api/places", require("./api/places")); 
app.use("/auth", require("./auth/").router);


// error handling middleware
app.use((err, req, res, next) => {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error");
});

// This is a global Mocha hook, used for resource cleanup.
// if (process.env.NODE_ENV === 'test') {
//   after('close the session store', () => sessionStore.stopExpiringSessions())
// }

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
    if (path.extname(req.path).length) {
        const err = new Error("Not found");
        err.status = 404;
        next(err);
    } else {
        next();
    }
});

// error handling endware
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(PORT, () =>
    console.log(`Connected to ${PORT}`)
);

module.exports = app;