import express from "express";
import { processRequestBody } from "zod-express-middleware";
import { createTaskHandler } from "./task.controller";
import { createTaskSchema } from "./task.schema";

const router = express.Router();

//  task routes

// router.get("/", (req, res) => {
//   return res.send(res.locals.user);
// });

// create task
router.post("/", processRequestBody(createTaskSchema.body), createTaskHandler);

export default router;
