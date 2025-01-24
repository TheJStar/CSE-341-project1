const mongodb = require("../db/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=[Contacts]
    const list = await mongodb.getDatabase().db().collection("contacts").find();
    list.toArray().then((users) => {
        res.setHeader("Content-Type", "application/json")
        res.status(200).json(users)
    })
}

const getSingle = async (req, res) => {
    //#swagger.tags=[Contacts]
    const userId = new ObjectId(req.params.id);
    const list = await mongodb.getDatabase().db().collection("contacts").find({ _id: userId });
    list.toArray().then((users) => {
        res.setHeader("Content-Type", "application/json")
        res.status(200).json(users[0])
    })
}

const createUser = async (req, res) => {
    //#swagger.tags=[Contacts]
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const results = await mongodb.getDatabase().db().collection("contacts").insertOne(user);
    if (results.acknowledged) {
        res.status(201).json(results)
    } else {
        res.status(500).json(results.error || "Something went wrong while creating a user")
    }
}

const updateUser = async (req, res) => {
    //#swagger.tags=[Contacts]
    const userId = new ObjectId(req.params.id);
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const results = await mongodb.getDatabase().db().collection("contacts").replaceOne({ _id: userId }, user);
    if (results.modifiedCount > 0) {
        res.status(200).send()
    } else {
        res.status(500).json(results.error || "Something went wrong while updating a user")
    }
}

const deleteUser = async (req, res) => {
    //#swagger.tags=[Contacts]
    const userId = new ObjectId(req.params.id);
    const results = await mongodb.getDatabase().db().collection("contacts").deleteOne({ _id: userId });
    if (results.deletedCount > 0) {
        res.status(204).send()
    } else {
        res.status(500).json(results.error || "Something went wrong while deleting a user")
    }
}

module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser,
}