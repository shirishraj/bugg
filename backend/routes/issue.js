const express = require("express");
const router = express.Router();
const {
  getIssues,
  getIssue,
  createIssue,
  updateIssue,
  deleteIssue,
} = require("../controllers/issue");

const Issue=require('../controllers/issue')
// router.route("/").get(getIssues).post(createIssue);

// router.route("/:id").get(getIssue).put(updateIssue).delete(deleteIssue);
module.exports = router;

router.post('/issue', Issue.issue)
router.get('/issues', Issue.getIssues)
router.get('/getCountIssue', Issue.getCountIssue)