const express = require("express");
const router = express.Router();
const parentController = require("../controllers/parentController");
const parentValidator = require("../middlewares/parentValidator")

//POST method to register a new parent
router.post("/register", parentValidator.register, parentController.register)

//POST method to login an existing parent
router.post("/login", parentController.login);

module.exports = router;
