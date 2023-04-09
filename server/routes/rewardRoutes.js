const express = require("express");
const router = express.Router();
const rewardController = require("../controllers/rewardController")

//GET method to get all rewards created by a parent
router.get("/", rewardController.getAllRewards);

//POST method to create a reward
router.post("/create", rewardController.createReward);

//PUT method to update a reward with given rewardId
router.put("/:taskId", rewardController.updateReward);

//DELETE method to delete a reward with given rewardId
router.delete("/:taskId", rewardController.deleteReward);

module.exports = router;
