const express = require("express");
const cors = require("cors");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");

const routes = require("./routes");

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 3600000 },
    })
);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(4567, () => {
    console.log("server started");
});
