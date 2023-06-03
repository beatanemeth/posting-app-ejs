const bcrypt = require("bcrypt")
const User = require("../models/userModel")

// used by bcrypt when hashing password
const saltRounds = 10


// @desc Signup or login user
// @route GET /user
// @access Public
const authUser = (req, res) => {
    res.render("auth", { user: req.session.isAuth })
}


// @desc Register user
// @route POST /user/register
// @access Public
const registerUser = (req, res) => {
    const { registerName, registerEmail, registerPassword } = req.body

    bcrypt.hash(registerPassword, saltRounds, (error, hashedPassword) => {
        const newUser = new User({
            name: registerName,
            email: registerEmail,
            password: hashedPassword
        })

        newUser.save((error) => {
            if (error) {
                console.log(error)
            } else {
                res.redirect("/user")
            }
        })
    })
}


// @desc Authenticate user
// @route POST /user/login
// @access Public
const loginUser = (req, res) => {
    const { loginEmail, loginPassword } = req.body

    User.findOne({ email: loginEmail }, (error, foundUser) => {
        if (error) {
            console.log(error)
        } else {
            if (foundUser) {
                bcrypt.compare(loginPassword, foundUser.password, (error, result) => {
                    if (result === true) {
                        req.session.isAuth = true
                        console.log(req.session)
                        console.log(req.session.id)
                        res.redirect("/blog/createpost")
                    }
                })
            }
        }
    })
}


// @desc Logout user
// @route GET /user/logout
// @access Private
const logoutUser = (req, res) => {
    req.session.destroy((error) => {
        if (error) throw error
        res.redirect("/")
    })
}


module.exports = {
    authUser,
    registerUser,
    loginUser,
    logoutUser
}