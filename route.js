const express = require("express");
const router = express.Router();
const apiController = require("./controller");

router.get("/", apiController.getRequest);
router.post("/validate-rule", apiController.handlerRuleValidation);

module.exports = router;
