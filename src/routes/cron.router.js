const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const redditController = require("../controllers/reddit.controller");
const rUserController = require("../controllers/reddit.user.controller");

// this api is related to a real cron job.
router.get("/cron/posts", function (req, res) {
    postController.savePosts(req, res);
});

// this api isn't a real cron job, but related to [/cron/posts].
router.get("/cron/reddits", function (req, res) {
    redditController.saveReddits(req, res);
});

// this api isn't a real cron job, but just incuded.
router.get("/cron/rusers", function (req, res) {
    rUserController.saveRUsers(req, res);
});