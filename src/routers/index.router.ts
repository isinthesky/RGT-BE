import express from "express";
import { Request, Response } from "express"; // 추가

const router = express.Router();

router.get("/", (req: Request, res: Response): void => {
  res.render("index", { title: "RGT", user: req.user });
});

router.get("/user", (req: Request, res: Response): void => {
  res.render("user", {
    user: req.user,
    name: req.user.name ? req.user.name.givenName : "Hello",
  });
});

export { router as default };
