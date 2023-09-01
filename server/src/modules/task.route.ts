import express from "express";
import { processRequestBody } from "zod-express-middleware";
import {
  createTaskHandler,
  deleteTaskHandler,
  findAllTasksHandler,
  updateTaskHandler,
} from "./task.controller";
import { taskSchema } from "./task.schema";

const router = express.Router();

// Find all tasks
router.get("/", findAllTasksHandler);

// Create task
router.post("/", processRequestBody(taskSchema.body), createTaskHandler);

// Update task
router.patch(
  "/:taskId",
  processRequestBody(taskSchema.body),
  updateTaskHandler
);

// Delete task
router.delete("/:taskId", deleteTaskHandler);

export default router;
