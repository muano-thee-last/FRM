const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
    clientID:     '342572205034-tkutr9564q77sgfug10fif89s2fbvdc2.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // Create or retrieve user from the database
    // Dummy code: pass profile directly to done()
    done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
