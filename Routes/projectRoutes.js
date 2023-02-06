const express = require("express");
const router = express.Router();
const projectController = require("../Controllers/projectController");

router.post("/create", projectController.create);
router.get("/:id", projectController.project);
router.post("/:id", projectController.createIssue);

module.exports = router;
