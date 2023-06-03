const mongoose = require("mongoose")


// to create a post schema
const postSchema = new mongoose.Schema({
    postTitle: {
        type: String,
        required: [true, "Please add a title."]
    },
    postContent: {
        type: String,
        required: [true, "Please add a text."]
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},
    {
        timestemps: true
    }
)

// to create a post model
const Post = mongoose.model("Post", postSchema);


module.exports = Post