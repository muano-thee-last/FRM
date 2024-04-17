const passport = require('passport'); // Passport.js for authentication
const GoogleStrategy = require('passport-google-oauth2').Strategy; // Passport.js strategy for Google OAuth2

// Configure Google OAuth2 authentication strategy
passport.use(new GoogleStrategy({
    clientID:     '342572205034-tkutr9564q77sgfug10fif89s2fbvdc2.apps.googleusercontent.com', // Google OAuth2 client ID
    clientSecret: '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', // Google OAuth2 client secret
    callbackURL: "http://localhost:5000/google/callback", // Callback URL for handling OAuth2 response
    passReqToCallback: true // Indicates whether to pass the request to the callback function
  },
  function(request, accessToken, refreshToken, profile, done) {
    // Callback function invoked after successful authentication
    // Create or retrieve user from the database
    // Dummy code: pass profile directly to done() as user object
    done(null, profile);
  }
));

// Serialize user object into session
passport.serializeUser(function(user, done) {
  done(null, user);
});

// Deserialize user object from session
passport.deserializeUser(function(user, done) {
  done(null, user);
});
