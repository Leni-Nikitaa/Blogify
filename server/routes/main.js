const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
router.get("", async (req, res) => {
  try {
    const locals = {
      title: "Blogify",
      description:
        "A dynamic blog platform for avid readers and aspiring writers, built with HTML, CSS, Node.js, and MongoDB. Seamlessly store and retrieve your posts, interact with a vibrant community, and dive into a world of literary exploration.",
    };
    let perPage = 7;
    let page = req.query.page || 1;
    const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();
    const count = await Post.countDocuments({});
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);
    res.render("index", {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
      currentRoute: "/",
    });
  } catch (error) {
    console.log(error);
  }
});
// router.get('', async (req, res) => {
//   const locals = {
//     title: "Blogify",
//     description: "A dynamic blog platform for avid readers and aspiring writers, built with HTML, CSS, Node.js, and MongoDB. Seamlessly store and retrieve your posts, interact with a vibrant community, and dive into a world of literary exploration."
//   }

//   try {
//     const data = await Post.find();
//     res.render('index', { locals, data });
//   } catch (error) {
//     console.log(error);
//   }

// });
router.get("/post/:id", async (req, res) => {
  try {
    let slug = req.params.id;

    const data = await Post.findById({ _id: slug });
    const locals = {
      title: data.title,
      description:
        "A dynamic blog platform for avid readers and aspiring writers, built with HTML, CSS, Node.js, and MongoDB. Seamlessly store and retrieve your posts, interact with a vibrant community, and dive into a world of literary exploration.",
    };
    res.render("post", {
      locals,
      data,
      currentRoute: `/post/${slug}`,
    });
  } catch (error) {
    console.log(error);
  }
});
router.post("/search", async (req, res) => {
  try {
    const locals = {
      title: "Seach",
      description:
        "A dynamic blog platform for avid readers and aspiring writers, built with HTML, CSS, Node.js, and MongoDB. Seamlessly store and retrieve your posts, interact with a vibrant community, and dive into a world of literary exploration.",
    };
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");
    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { body: { $regex: new RegExp(searchNoSpecialChar, "i") } },
      ],
    });
    res.render("search", {
      data,
      locals,
      currentRoute: "/",
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/about", (req, res) => {
  res.render("about", {
    currentRoute: "/about",
  });
});

// function insertPostData () {
//   Post.insertMany([
//     {
//       title: "The Art of Web Development",
//       body: "Explore the world of web development and learn the best practices for creating stunning websites."
//     },
//     {
//       title: "Mastering CSS Grid Layout",
//       body: "A comprehensive guide to mastering CSS Grid Layout, a powerful tool for creating complex web layouts."
//     },
//     {
//       title: "Building Responsive Websites",
//       body: "Learn how to create responsive websites that look great on all devices, from smartphones to desktops."
//     },
//     {
//       title: "Introduction to Node.js",
//       body: "Get started with Node.js and learn how to build scalable and efficient web applications."
//     },
//     {
//       title: "The Power of MongoDB",
//       body: "Discover the power of MongoDB and how it can revolutionize the way you store and retrieve data in your web applications."
//     },
//     {
//       title: "JavaScript Fundamentals",
//       body: "Master the fundamentals of JavaScript, the language that powers dynamic web content."
//     },
//     {
//       title: "Creating Dynamic Web Pages with AJAX",
//       body: "Learn how to use AJAX to create dynamic web pages that load content asynchronously, providing a smoother user experience."
//     },
//     {
//       title: "Optimizing Web Performance",
//       body: "LExplore techniques for optimizing web performance, including minimizing load times and reducing page size."
//     },
//     {
//       title: "Securing Your Web Applications",
//       body: "Discover best practices for securing your web applications and protecting them from common security threats."
//     },
//     {
//       title: "The Future of Web Development,
//       body: "Explore the latest trends and technologies shaping the future of web development, from AI to voice interfaces."
//     },
//   ])
// }

// insertPostData();

module.exports = router;
