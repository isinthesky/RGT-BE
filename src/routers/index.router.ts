import express, { Request, Response } from "express"; // 추가
import { fetchTodos } from "../middlewares/auth.middleware.js";
import {
  insert,
  duplicate,
  replace,
  allOrders,
} from "../controllers/order.controller.js";

const router = express.Router();

router.get("/", allOrders, (req: Request, res: Response): void => {
  res.render("index", { title: "RGT", user: req.user, orders: req.orders });
});

router.get("/user", fetchTodos, (req: Request, res: Response): void => {
  res.render("user", {
    user: req.user,
    name: req.user.name ? req.user.name.givenName : "Hello",
    orderer: req.user.name ? req.user.name.givenName : "Hello",
  });
});

router.get("/order", fetchTodos, (req: Request, res: Response): void => {
  res.render("order", {
    user: req.user,
    name: req.user.name ? req.user.name.givenName : "Hello",
    orderer: req.user.name ? req.user.name.givenName : "Hello",
  });
});

router.post("/order", fetchTodos, insert, (req: Request, res: Response): void => {
  res.render("success", { user: req.user });
});

router.post(
  "/order/duplicate",
  fetchTodos,
  duplicate,
  (req: Request, res: Response): void => {
    res.render("success", { user: req.user });
  }
);

router.post(
  "/order/replace",
  fetchTodos,
  replace,
  (req: Request, res: Response): void => {
    res.render("success", { user: req.user });
  }
);

router.get("/order/edit", fetchTodos, (req: Request, res: Response): void => {
  res.render("edit", { user: req.user });
});

export { router as default };
