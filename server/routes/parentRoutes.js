const express = require("express");
const router = express.Router();
const parentController = require("../controllers/parentController");

//POST method to register a new parent
router.post("/register", parentController.register)

//POST method to login an existing parent
router.post("/login", parentController.login);

module.exports = router;
