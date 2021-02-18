const express = require('express'),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    Users = require('../database/Users'),
    router = express.Router();

require('dotenv').config();

// API entry points

// SIgn up
router.post('/signup', (req, res) => {
    var user = new Users({
        username: req.body.username,
        password: req.body.password
    });

    user.save().then(() => {
        // Create a JWT token to save in memory; Signifies a log in by the user id
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.json({ token: token });
    }).catch(err => {
        res.status().json({});
    });
});

// Log in
/* First we log in using passport's local strategy, i.e. username and password, through
the middleware. If successful, make the JWT token, like the sign up route and 
send the token to the front-end as json. Not storing in cookies, so don't need session */
router.post('/login', passport.authenticate('local', {
    session: false,
    failureFlash: true
}), (req, res) => {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET);

    res.json({ token: token });
});

/*  WARNING: Careful here. This route gets the access to the whole user object,
    containing password etc.
*/
router.get('/user', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    // If the token wasn't set req wouldn't have the user object
    if(!req.user) {
        res.json({
            username: 'Nobody.'
        });
    }

    // TODO: And add their checkout array or other details
    res.json({
        username: req.user.username
    });
});

module.exports = router;