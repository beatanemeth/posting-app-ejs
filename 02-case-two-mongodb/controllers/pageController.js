// @desc Home page
// @route GET /
// @access Public
const home = (req, res) => {
    res.render("home", { user: req.session.isAuth })
}


// @desc About page
// @route GET /about
// @access Public
const about = (req, res) => {
    res.render("about", { user: req.session.isAuth })
}

// @desc Contact page
// @route GET /contact
// @access Public
const contact = (req, res) => {
    res.render("contact", { user: req.session.isAuth })
}


module.exports = {
    home,
    about,
    contact
}