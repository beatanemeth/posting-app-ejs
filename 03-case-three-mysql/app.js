require("dotenv").config();
const express = require("express")
const ejs = require("ejs")
const session = require("express-session")
const MySQLStore = require("express-mysql-session")(session)
const mysql = require("mysql")
const bcrypt = require("bcrypt")


// function that represents the Express module
const app = express()

const sessionCookieName = process.env.SESSION_COOKIE_NAME
const sessionCookieSecret = process.env.SESSION_COOKIE_SECRET

// used by bcrypt when hashing password
const saltRounds = 10


// templating language/engine that lets generate HTML with plain JavaScript
app.set("view engine", "ejs")


// parsing the incoming data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// serving public files
app.use(express.static("public"))


/** Connecting to MySQL database and Session **/
const options = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}

// create a connection to MySQL Server
const connection = mysql.createConnection(options)
connection.connect(function (error) {
    if (error) {
        return console.error("error: " + error.message);
    }
    console.log("Connected to MySQL server.");
});

const sessionStore = new MySQLStore(options)

app.use(session({
    key: sessionCookieName,
    secret: sessionCookieSecret,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
}));


const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next()
    } else {
        req.session.error = "You have to Login first";
        res.render("oops")
    }
}


/** Routes **/
app.get("/", (req, res) => {
    res.render("home", { user: req.session.isAuth })
})


app.get("/user", (req, res) => {
    res.render("auth", { user: req.session.isAuth })
})


app.get("/about", (req, res) => {
    res.render("about", { user: req.session.isAuth })
})


app.get("/contact", (req, res) => {
    res.render("contact", { user: req.session.isAuth })
})


app.post("/user/register", (req, res) => {
    const { registerName, registerEmail, registerPassword } = req.body

    bcrypt.hash(registerPassword, saltRounds, function (error, hashedPassword) {
        const newUserValues = [registerName, registerEmail, hashedPassword]

        const newUser = `INSERT INTO users (name, email, passwrd) VALUES(?)`;

        connection.query(newUser, [newUserValues], function (error, result) {
            if (error) {
                console.log(error.message);
            } else {
                console.log("User signed up.");
                res.redirect("/user")
            }
        });
    });
})


app.post("/user/login", (req, res) => {
    const { loginEmail, loginPassword } = req.body

    if (loginEmail && loginPassword) {
        const loginUser = `SELECT passwrd FROM users WHERE email = ?`
        connection.query(loginUser, [loginEmail], function (error, foundPasswrd, fields) {
            bcrypt.compareSync(loginPassword, foundPasswrd[0].passwrd)

            req.session.isAuth = true
            console.log("Login successful!");
            console.log(req.session)
            console.log(req.session.id)
            res.redirect("/blog/createpost")
        })
    } else {
        res.render("oops")
    }
})


app.get("/blog", (req, res) => {
    res.render("blog", {
        user: req.session.isAuth
    })
})


app.get("/blog/createpost", isAuth, (req, res) => {
    res.render("createpost", { user: req.session.isAuth })
})


app.get("/user/logout", isAuth, (req, res) => {
    req.session.destroy((error) => {
        if (error) throw err
        res.redirect("/")
    })
})




app.listen(3000, () => {
    console.log("Server is running on port 3000.")
})
