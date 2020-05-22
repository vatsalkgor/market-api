const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/create/party/add", (req, res) => {
    res.json({ msg: "hi" });
});

module.exports = router;
