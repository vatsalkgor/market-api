const express = require("express");
const router = express.Router();
const db = require("../db");

const insertGroup =
    "INSERT INTO groups(name,fcom,fwage,ccom,cwage) VALUES (?,?,?,?,?)";
const updateGroup =
    "UPDATE groups SET name=?, fcom=?, fwage=?,ccom=?,cwage WHERE id=?";
const deleteGroup = "DELETE FROM groups where id=?";
const getGroup = "SELECT * FROM groups";
const getGroupWithId = "SELECT * from groups  where id=?";

router.post("/create/group", (req, res) => {
    const info = db
        .prepare(insertGroup)
        .run(
            req.body.name,
            req.body.fcom,
            req.body.fwage,
            req.body.ccom,
            req.body.cwage
        );
    res.json(info);
});

router.get("/create/group", (req, res) => {
    const info = db.prepare(getGroup).all();
    res.json(info);
});

router.get("/create/group/:id", (req, res) => {
    const info = db.prepare(getGroupWithId).get(req.params.id);
    res.json(info);
});

router.put("/create/group/:id", (req, res) => {
    const info = db
        .prepare(updateGroup)
        .run(
            req.body.name,
            req.body.fcom,
            req.body.fwage,
            req.body.ccom,
            req.body.cwage,
            req.params.id
        );
    res.json(info);
});

router.delete("/create/group/:id", (req, res) => {
    const info = db.prepare(deleteGroup).run(req.params.id);
    res.json(info);
});

module.exports = router;
