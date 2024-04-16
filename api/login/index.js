const express = require('express');
const session = require('express-session')
const passport = require('passport');
const path = require('path');
require('./auth');

const app = express();

app.use(session({
  secret: 'cat',
}));

app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

app.get('/',(req,res)=>{
    res.send('<a href="/auth/google">continue with google<a>');
})

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] })
);

app.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/home',
        failureRedirect: '/google/failure'
}));

app.get('/google/failure',(req,res)=>{
    res.send('something went wrong');
})

app.get('/home', isLoggedIn,(req, res) => {
    res.sendFile(path.join(__dirname, '../../private/home.html'));

});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
