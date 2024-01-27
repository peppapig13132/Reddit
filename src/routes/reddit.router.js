const express = require("express");
const router = express.Router();
const controller = require("../controllers/reddit.controller");

// router.get("/cron/reddits", function (req, res) {
//   controller.saveReddits(req, res);
// });
// 3. Get all reddits
router.get("/reddits", function (req, res) {
  controller.getReddits(req, res);
});

module.exports = router;
