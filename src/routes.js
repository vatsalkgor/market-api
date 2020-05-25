const express = require("express");
const router = express.Router();
const party = require("./create/party");
const group = require("./create/group");
const db = require("./db");

router.post("/", (req, res, next) => {
    if (req.session.username) {
        return res.json({ status: 2, msg: "already logged in" });
    }
    next();
});
router.post("/", (req, res) => {
    // varify the username and password and send res.json accordingly.
    const row = db
        .prepare("select username from login where username=? and password=?")
        .get(req.body.username, req.body.password);
    console.log(row);
    if (row) {
        req.session.username = row.username;
        return res.json({ status: 1, msg: "correct" });
    } else {
        return res.json({ status: 0, msg: "incorrect" });
    }
});

router.use(party);
router.use(group);

module.exports = router;
