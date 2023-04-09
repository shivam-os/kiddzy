const express = require("express");
const router = express.Router();
const kidController = require("../controllers/kidController");

//POST method to login a kid
router.get("/login", kidController.login);

//GET method to get all kids of a parent
router.get("/", kidController.getAllKids);

//GET method to get a single kid of a parent
router.get("/:kidId", kidController.getSingleKid);

//POST method to create a kid
router.post("/create", kidController.createKid);

//PUT method to update a kid with given id
router.post("/:kidId",  kidController.updateKid);

//DELETE method to delete a kid with given id
router.post("/:kidId", kidController.deleteKid);

module.exports = router;
