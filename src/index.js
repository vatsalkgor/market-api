const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
    res.send({ text: "Hello World from API" });
});
app.listen(3001, () => {
    console.log("server started");
});
