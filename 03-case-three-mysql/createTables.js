require("dotenv").config()
const mysql = require("mysql")


/*** CREATE TABLES & POPULATE WITH SOME INITIAL DATA ***/
// create connection
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

// connect to MySQL server
connection.connect(function (err) {
    if (err) {
        return console.error("error: " + err.message)
    }
    console.log(`Connected to MySQL and ${process.env.MYSQL_DATABASE} database.`);

    // create tables
    const usersTable = `CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        passwrd VARCHAR(255) NOT NULL
    )`;

    const postsTable = `CREATE TABLE IF NOT EXISTS posts (
        id INT PRIMARY KEY AUTO_INCREMENT,
        postTitle VARCHAR(255) NOT NULL,
        postContent TEXT(65535) NOT NULL,
        user_id INT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )`;

    connection.query(usersTable, function (err, results, fields) {
        if (err) {
            console.log(err.message);
        }
        console.log("Users tables created.")
    });

    connection.query(postsTable, function (err, results, fields) {
        if (err) {
            console.log(err.message);
        }
        console.log("Posts table created.")
    });

    // insert some initial data into tables
    const newUser = `INSERT INTO users VALUES(
        1,
        'Tom',
        'tom@mail.com',
        '$2b$10$00uJu4Ilk.Gu2UTiqnVu2O4sbuSTnAqeECfoWBbCKjZRBSMFWsx/.'
    )`;

    const newPosts = `INSERT INTO posts VALUES ?`;
    const newPostsValues = [
        [
            1,
            'Title One',
            'Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.',
            1
        ],
        [
            2,
            'Title Two',
            'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
            1
        ],
        [
            3,
            'Title Three',
            'Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.',
            1
        ]
    ];

    connection.query(newUser, function (err, result) {
        if (err) {
            console.log(err.message);
        }
        console.log("User inserted.");
    });

    connection.query(newPosts, [newPostsValues], function (err, result) {
        if (err) {
            console.log(err.message);
        }
        console.log("Number of records inserted: " + result.affectedRows);
    });

    // close database connection
    connection.end(function (err) {
        if (err) {
            return console.log(err.message);
        }
    });
});
