const express = require("express");
const router = express.Router();
const controller = require("../controllers/post.controller");

// router.get("/cron/posts", function (req, res) {
//   controller.savePosts(req, res);
// });
// 2. Retrieve all posts.
router.get("/posts", function (req, res) {
  controller.getPosts(req, res);
});
// 4. Retrieve latest posts from a certain reddit.
router.get("/posts/:reddit", function (req, res) {
  controller.getLastPosts(req, res);
});
// 5. Get the specific post record
router.get("/post/:id", function (req, res) {
  controller.getPost(req, res);
});
// 6. Delete the specific post record
router.delete("/post/:id", function (req, res) {
  controller.deletePost(req, res);
});
// 7. Search posts
router.get("/search", function (req, res) {
  controller.searchPosts(req, res);
});

module.exports = router;
