const express = require("express");
const router = express.Router();
const controller = require("../controllers/reddit.user.controller");

// router.get("/cron/rusers", function (req, res) {
//   controller.saveRUsers(req, res);
// });
// 1. Retrieve all users
router.get("/rusers", function (req, res) {
  controller.getRUsers(req, res);
});

module.exports = router;
