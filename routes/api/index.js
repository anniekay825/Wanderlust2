const router = require("express").Router();
const bookRoutes = require("./weather");


router.use("/books", bookRoutes);

module.exports = router;
