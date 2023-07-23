import express from "express";
import path, { dirname } from "path";
import dotenv from "dotenv";

import { fileURLToPath } from "url";
import { routersLoader } from "./loaders/routers.js";
import { utilsLoader } from "./loaders/utils.js";
import { SERVER_PORT } from "./env.js";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

utilsLoader(app);
routersLoader(app);

async function main() {
  const allOrders = await prisma.order.findMany();
  console.log(allOrders);
}
main();

app.listen(SERVER_PORT, () => console.log("Server Running on Port " + SERVER_PORT));
