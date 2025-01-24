const router = require("express").Router();

router.get("/", (res, req) => {
    res.setEncoding("Hello World!");
});

module.exports = router;