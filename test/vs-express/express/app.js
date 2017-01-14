var express = require("express"),
    path = require("path"),
    cookieParser = require("cookie-parser"),
    bodyParser = require("body-parser"),

    index = require("./routes/index"),
    users = require("./routes/users"),

    app = express();

app.set("strict routing", true);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/users", users);

app.use(function(req, res, next) {
    next(new Error());
});

app.use(function(err, req, res, next) {
    res.locals.message = "Not Found";
    res.locals.status = 404;

    res.status(res.locals.status);
    res.render("error");
});

module.exports = app;
