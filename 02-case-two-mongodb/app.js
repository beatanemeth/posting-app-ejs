const express = require("express")
const ejs = require("ejs")
const session = require("express-session")
const MongoDBSession = require("connect-mongodb-session")(session)

const connectDB = require("./config/db")

// function that represents the Express module
const app = express()

const sessionCookieSecret = "hdlalggf47h63aaf7d64v25b"


// templating language/engine that lets generate HTML with plain JavaScript
app.set("view engine", "ejs")


// parsing the incoming data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// serving public files
app.use(express.static("public"))


// connect to MongoDB
connectDB()

// to store session in MongoDB create a store
const store = new MongoDBSession({
    uri: "mongodb://localhost:27017/sessionsDB",
    collection: "mySessions"
});

// set up session to keep user logged in
app.use(session({
    secret: sessionCookieSecret,
    resave: false,
    saveUninitialized: false,
    store: store,
}));



/* Routes */
app.use ("", require("./routes/pageRoutes"))
app.use("/user", require("./routes/userRoutes"))
app.use("/blog", require("./routes/postRoutes"))




app.listen(3000, () => {
    console.log("Server is running on port 3000.")
})
