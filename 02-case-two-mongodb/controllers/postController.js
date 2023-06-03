const Post = require("../models/postModel")


// @desc Get all blog posts
// @route GET /blog
// @access Public
const getPosts = (req, res) => {
    Post.find({}, (error, posts) => {
        res.render("blog", {
            posts,
            user: req.session.isAuth
        })
    })
}


// @desc Create post page
// @route GET /blog/createpost
// @access Private
const createPost = (req, res) => {
    res.render("createpost", { user: req.session.isAuth })
}


// @desc Create new blog post
// @route POST /blog/createpost
// @access Private
const setPost = (req, res) => {
    const { postTitle, postContent } = req.body

    const post = new Post({
        postTitle,
        postContent
    })

    post.save((error) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect("/blog")
        }
    })
}


// @desc Get single blog post
// @route GET /blog/:postId
// @access Public/Private
const getPost = (req, res) => {
    const { postId } = req.params

    Post.findById({ _id: postId }, (error, post) => {
        if (req.session.isAuth) {
            res.render("edit", {
                postTitle: post?.postTitle,
                postContent: post?.postContent,
                user: req.session.isAuth
            })
        } else {
            res.render("post", {
                postTitle: post?.postTitle,
                postContent: post?.postContent,
                user: req.session.isAuth
            })
        }
    })
}


module.exports = {
    getPosts,
    createPost,
    setPost,
    getPost,
}