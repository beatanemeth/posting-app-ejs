const express = require("express")
const router = express.Router()
const isAuth = require("../middleware/isAuth")
const { getPosts, createPost, setPost, getPost, } = require("../controllers/postController")


router.get("", getPosts)
router.get("/createpost", isAuth, createPost)
router.post("/createpost", isAuth, setPost)
router.get("/:postId", getPost)


module.exports = router