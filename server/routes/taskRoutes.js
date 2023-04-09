const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

//GET method to get all tasks created by a parent
router.get("/", taskController.getAllTasks);

//POST method to create a task
router.post("/create", taskController.createTask);

//PUT method to update a task with given taskId
router.put("/:taskId", taskController.updateTask);

//DELETE method to delete a task with given taskId
router.delete("/:taskId", taskController.deleteTask);

module.exports = router;
