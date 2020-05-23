const express = require("express");
const router = express.Router();
const db = require("../db");

const insertParty =
    "INSERT INTO party(name,type,contact,pending_amount) VALUES (?,?,?,?)";
const updateParty =
    "UPDATE party SET name=?, type=?, contact=?,pending_amount=? WHERE id=?";
const deleteParty = "DELETE FROM party where id=?";
const getParty = "SELECT * FROM party";
const getPartyWithId = "SELECT * from party where id=?";

router.post("/create/party", (req, res) => {
    const info = db
        .prepare(insertParty)
        .run(
            req.body.name,
            req.body.type,
            req.body.contact,
            req.body.pending_amount
        );
    res.json(info);
});

router.get("/create/party", (req, res) => {
    const info = db.prepare(getParty).all();
    res.json(info);
});

router.get("/create/party/:id", (req, res) => {
    const info = db.prepare(getPartyWithId).get(req.params.id);
    res.json(info);
});

router.put("/create/party/:id", (req, res) => {
    const info = db
        .prepare(updateParty)
        .run(
            req.body.name,
            req.body.type,
            req.body.contact,
            req.body.pending_amount,
            req.params.id
        );
    res.json(info);
});

router.delete("/create/party/:id", (req, res) => {
    const info = db.prepare(deleteParty).run(req.params.id);
    res.json(info);
});

module.exports = router;
