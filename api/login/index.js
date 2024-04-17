// Import necessary modules
const express = require('express'); // Express.js framework for handling HTTP requests
const session = require('express-session'); // Express.js middleware for session management
const passport = require('passport'); // Passport.js for authentication
const path = require('path'); // Node.js module for working with file paths
const cors = require('cors');
require('./auth'); // Custom authentication configuration

// Create Express application
const app = express();

// Configure session middleware
app.use(cors())
app.use(session({
  secret: 'cat',
  resave: true,
  saveUninitialized: true
}));

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Middleware function to check if user is authenticated
function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401); // Check if user is authenticated, if not, send 401 Unauthorized status
}

// Route to display home page
app.get('/',(req,res)=>{
    res.send('<a href="/auth/google">continue with google<a>'); // Display link to initiate Google OAuth authentication
})

// Route to initiate Google OAuth authentication
app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }) // Redirect user to Google OAuth consent screen
);

// Callback route after Google OAuth authentication
app.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/home', // Redirect to home page on successful authentication
        failureRedirect: '/google/failure' // Redirect to failure route on authentication failure
}));

// Route to handle authentication failure
app.get('/google/failure',(req,res)=>{
    res.send('something went wrong'); // Display error message for authentication failure
})

// Route to display home page after successful authentication
app.get('/home', isLoggedIn,(req, res) => {
    res.sendFile(path.join(__dirname, '../../private/home.html')); // Send home.html file from private directory
});

// Start the server
const PORT = process.env.PORT || 5000; // Define port number for server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Print server start message with port number
});
