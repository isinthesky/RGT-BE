import { Request, Response, NextFunction } from "express";

const fetchTodos = function (req: Request, res: Response, next: NextFunction) {
  console.log("fetchtodos", req.user);
  if (req.user) {
    next();
  } else {
    res.redirect("/");
  }
};

export { fetchTodos };
