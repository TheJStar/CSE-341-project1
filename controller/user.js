const mongodb = require("../db/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
    const list = await mongodb.getDatabase().db().collection("contacts").find();
    list.toArray().then((users) => {
        res.setHeader("Content-Type", "application/json")
        res.status(200).json(users)
    })
}

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const list = await mongodb.getDatabase().db().collection("contacts").find({ _id: userId });
    list.toArray().then((users) => {
        res.setHeader("Content-Type", "application/json")
        res.status(200).json(users[0])
    })
}

module.exports = {
    getAll,
    getSingle,
}