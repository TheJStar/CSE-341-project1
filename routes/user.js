const router = require("express").Router();
const userController = require("../controller/user") 

router.get("/", userController.getAll);

router.get("/:id", userController.getSingle);

module.exports = router;