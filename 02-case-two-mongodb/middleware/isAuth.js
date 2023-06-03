const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next()
    } else {
        req.session.error = "You have to Login first";
        res.render("oops")
    }
}


module.exports = isAuth