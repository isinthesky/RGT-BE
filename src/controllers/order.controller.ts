import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allOrders = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const orders = await prisma.order.findMany();
    req.orders = orders;

    next();
  } catch (error) {
    next(error);
  }
};

const insert = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const date = new Date();
    const day = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const newOrder = await prisma.order.create({
      data: {
        order_id: req.body.order_id,
        prodect_name: req.body.prodect_name,
        table_no: Number(req.body.table_no),
        quantity: Number(req.body.quantity),
        order_date: day,
        order_time: time,
        date_time: day + " " + time,
        orderer_name: req.body.orderer_name,
        options: req.body.options,
      },
    });

    next();
  } catch (error) {
    next(error);
  }
};

const duplicate = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const allOrders = await prisma.order.findMany();
    const orderMap = new Map<string, number>();

    for (const order of allOrders) {
      if (orderMap.has(order.order_id)) {
        orderMap.set(order.order_id, orderMap.get(order.order_id) + 1);
      } else {
        orderMap.set(order.order_id, 1);
      }
    }

    for (const [orderid, count] of orderMap.entries()) {
      for (let i = 0; i < count - 1; i += 1) {
        const finded = await prisma.order.findFirst({
          where: {
            order_id: orderid,
          },
        });

        if (finded) {
          await prisma.order.delete({
            where: {
              id: finded.id,
            },
          });
        }
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};

const replace = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const findQuery = {};
    findQuery[req.body.field] = req.body.find;
    const updateQuery = {};
    updateQuery[req.body.field] = req.body.replace;

    const replaceOrder = await prisma.order.updateMany({
      where: findQuery,
      data: updateQuery,
    });

    console.log(replaceOrder);

    next();
  } catch (error) {
    next(error);
  }
};

export { insert, duplicate, replace, allOrders };
