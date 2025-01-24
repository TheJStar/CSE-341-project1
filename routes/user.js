const router = require("express").Router();
const userController = require("../controller/user") 

router.get("/", userController.getAll);

router.get("/:id", userController.getSingle);

router.post("/", userController.createUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;