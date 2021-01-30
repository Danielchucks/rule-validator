const express = require("express");
const router = express.Router();
const apiController = require("./controller");

router.get("/", apiController.getRequest);

module.exports = router;
