import { Application } from "express";
import { Request, Response } from "express"; // 추가

import authRouter from "../routers/auth.router.js";
import indexRouter from "../routers/index.router.js";

const routersLoader = function (app: Application): void {
  app.use("/", indexRouter);
  app.use("/auth", authRouter);

  app.use(function (err: object, req: Request, res: Response): void {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.render("error");
  });
};

export { routersLoader };
