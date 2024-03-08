const express = require("express");
const router = express.Router();
router.get("", (req, res) => {
  const locals = {
    title: "Blogify",
    description:
      "A dynamic blog platform for avid readers and aspiring writers, built with HTML, CSS, Node.js, and MongoDB. Seamlessly store and retrieve your posts, interact with a vibrant community, and dive into a world of literary exploration.",
  };
  res.render("index", { locals });
});
router.get("/about", (req, res) => {
  res.render("about");
});
module.exports = router;
