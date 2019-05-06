const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api-routes");
const authRoutes = require("./authRoutes");


router.use("/api", apiRoutes);
router.use("/auth", authRoutes);


router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});


// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;
