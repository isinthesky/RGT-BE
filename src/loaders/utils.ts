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
      secret: "rgt",
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.authenticate("session"));

  app.use(cookieParser());
  app.use(helmet());
  app.use(morgan("dev"));
};

export { utilsLoader };
