import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import { DoneFunction } from "passport";

import {
  GOOGLE_AUTH_CLIENTID,
  GOOGLE_AUTH_PASSWORD,
  GOOGLE_AUTH_REDIRECTIONURL,
} from "../env.js";

const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, name: user.name, emails: user.emails });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_AUTH_CLIENTID,
      clientSecret: GOOGLE_AUTH_PASSWORD,
      callbackURL: GOOGLE_AUTH_REDIRECTIONURL,
      scope: ["profile", "email"],
      state: true,
    },
    function (
      accessToken: string,
      refreshToken: string,
      profile: object,
      done: DoneFunction
    ): void {
      if (accessToken) {
        return done(null, profile);
      }
    }
  )
);
