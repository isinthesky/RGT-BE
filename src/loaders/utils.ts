import { Application } from "express";
import passport from "passport";
import session from "express-session";
import helmet from "helmet";
import morgan from "morgan";
import "../config/passport";

import { COOKIE_SECRET } from "../env.js";

const utilsLoader = function (app: Application): void {
  app.use(
    session({
      secret: COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.authenticate("session"));
  app.use(helmet());
  app.use(morgan("dev"));
};

export { utilsLoader };
