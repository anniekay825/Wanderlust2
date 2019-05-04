const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api-routes");
const authorRoutes = require("./author-routes");


router.use("/api", apiRoutes);
router.use("/author", authorRoutes);


router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});


// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;
