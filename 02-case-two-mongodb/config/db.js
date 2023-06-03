const mongoose = require("mongoose")

// connect to MongoDB
const connectDB = () => {
    mongoose.set('strictQuery', false)
    mongoose.connect("mongodb://localhost:27017/sessionsDB", {
        useNewUrlParser: true
    })
        .then((res) => {
            console.log("MongoDB is connected!")
        })
}


module.exports = connectDB