import { Request, Response, NextFunction } from "express";

const fetchTodos = function (req: Request, res: Response, next: NextFunction) {
  if (req.user) {
    next();
  } else {
    res.redirect("/");
  }
};

export { fetchTodos };
