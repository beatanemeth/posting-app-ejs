const express = require("express")
const ejs = require("ejs")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt")
const _ = require("lodash")
const { users, posts } = require("./data")


// function that represents the Express module
const app = express()

const sessionCookieSecret = "hdlalggf47h63aaf7d64v25b"

// used by bcrypt when hashing password
const saltRounds = 10

// a variable to save a session
var userSession;

// templating language/engine that lets generate HTML with plain JavaScript
app.set("view engine", "ejs")

// parsing the incoming data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// serving public files
app.use(express.static("public"))

// cookie parser middleware - the server can access the necessary option to save, read and access a cookie
app.use(cookieParser());

// set up session to keep user logged in
app.use(session({
    secret: sessionCookieSecret,
    resave: false,
    saveUninitialized: true
}));




/* Routes */
app.get("/", (req, res) => {
    res.render("home")
})


app.get("/auth", (req, res) => {
    res.render("auth")
})


app.get("/about", (req, res) => {
    res.render("about")
})


app.get("/contact", (req, res) => {
    res.render("contact")
})


app.get("/oops", (req, res) => {
    res.render("oops")
})


app.post("/register", (req, res) => {
    const { registerName, registerEmail, registerPassword } = req.body

    bcrypt.hash(registerPassword, saltRounds, (err, hashedPassword) => {
        const newUser = {
            name: registerName,
            email: registerEmail,
            password: hashedPassword
        }

        users.push(newUser)
        console.log(users)
        res.render("auth")
    })
})


app.post("/login", (req, res) => {
    const { loginEmail, loginPassword } = req.body
    let requestedUser = {}

    users.forEach((user) => {
        if (user.email === loginEmail) {
            requestedUser = {
                email: user.email,
                password: user.password
            }
        }
    })

    console.log(requestedUser)

    const checkPassword = bcrypt.compareSync(loginPassword, requestedUser.password)

    if (checkPassword) {
        userSession = req.session
        userSession.userid = loginEmail
        console.log(req.session)
        res.redirect("/createpost")
    } else {
        res.status(400).json("wrong credentials")
    }
})


app.get("/createpost", (req, res) => {
    userSession = req.session;
    if (userSession.userid) {
        res.render("createpost")
    } else
        res.render("oops")
})


app.post("/createpost", (req, res) => {
    const { postTitle, postContent } = req.body

    const post = {
        postTitle,
        postContent
    }

    posts.push(post)
    res.redirect("/posts")
});


app.get("/posts", (req, res) => {
    res.render("posts", {
        posts
    })
})


app.get("/posts/:postTitle", (req, res) => {
    const { postTitle } = req.params
    const requestedTitle = _.lowerCase(postTitle)

    posts.forEach((post) => {
        const storedTitle = _.lowerCase(post.postTitle)

        if (storedTitle === requestedTitle) {
            console.log("Match found!")
            res.render("post", {
                postTitle: post.postTitle,
                postContent: post.postContent
            })
        }
    })
});


app.get("/logout", (req, res) => {
    req.session.destroy()
    res.redirect("/")
})




app.listen(3000, () => {
    console.log("Server is running on port 3000.")
})