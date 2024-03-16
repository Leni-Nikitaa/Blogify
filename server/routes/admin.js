const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const adminLayout = "../views/layouts/admin";
router.get("/admin", async (req, res) => {
  try {
    const locals = {
      title: "Admin",
      description:
        "A dynamic blog platform for avid readers and aspiring writers, built with HTML, CSS, Node.js, and MongoDB. Seamlessly store and retrieve your posts, interact with a vibrant community, and dive into a world of literary exploration.",
    };
    res.render("admin/index", { locals, layout: adminLayout });
  } catch (error) {
    console.log(error);
  }
});
router.post("/admin", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    res.redirect("/admin");
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
