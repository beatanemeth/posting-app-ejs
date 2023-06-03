const User = require("./models/userModel")
const Post = require("./models/postModel")
const connectDB = require("./config/db")


// connect to MongoDB
connectDB()


// initial user
const userOne = new User({
    name: "Tom",
    email: "tom@mail.com",
    password: "$2b$10$00uJu4Ilk.Gu2UTiqnVu2O4sbuSTnAqeECfoWBbCKjZRBSMFWsx/." // 1234
})


// initial posts
const postOne = new Post({
    postTitle: "Title One",
    postContent: "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing."
});

const postTwo = new Post({
    postTitle: "Title Two",
    postContent: "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui."
});

const postThree = new Post({
    postTitle: "Title Three",
    postContent: "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero."
});


// save initial user to the DB
userOne.save((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Successfully saved user to the sessionsDB.")
    }
});


// save initial posts to the DB
Post.insertMany([postOne, postTwo, postThree], (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Succesfully saved all the posts to the sessionsDB.")
    }
});