import { Application } from "express";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import "../config/passport";

const utilsLoader = function (app: Application): void {
  app.use(
    session({
      secret: "keyboard cat",
      resave: false, // don't save session if unmodified
      saveUninitialized: false, // don't create session until something stored
    })
  );

  app.use(passport.authenticate("session"));

  app.use(cookieParser());
  app.use(helmet());
  app.use(morgan("dev"));
};

export { utilsLoader };
