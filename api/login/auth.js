const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;


const GOOGLE_CLIENT_ID = '342572205034-tkutr9564q77sgfug10fif89s2fbvdc2.apps.googleusercontent.com' ;
const GOOGLE_CLIENT_SECRET = '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';


passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback   : true
  },


  function(request, accessToken, refreshToken, profile, done) {
    /*create a new user in the database */
    //this is dummy code
    done(null,profile);
  }
));

//to be changed
passport.serializeUser(function(user,done){
  done(null,user)
});

passport.deserializeUser(function(user,done){
  done(null,user)
});