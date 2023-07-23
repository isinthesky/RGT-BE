import express, { NextFunction } from "express";
import { Request, Response } from "express"; // 추가
import passport, { DoneFunction } from "passport"; // 수정

const router = express.Router();

router.get("/login", (req: Request, res: Response, next: NextFunction): void => {
  res.render("login");
});

router.get("/google", passport.authenticate("google"));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successReturnToOrRedirect: "/user",
    failureRedirect: "/auth/login",
    failureMessage: true,
  })
);

export { router as default };
