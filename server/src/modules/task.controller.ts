import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { RequestTaskBody, RequestTaskParams } from "./task.schema";
import { createTask, deleteTask, findAllTasks, findTask } from "./task.service";

// @desc    Find all tasks
// @route   GET /api/tasks
// @access  Public
export async function findAllTasksHandler(_: Request, res: Response) {
  const tasks = await findAllTasks();

  return res.status(StatusCodes.OK).send(tasks);
}

// @desc    Create task
// @route   POST /api/tasks
// @access  Public
export async function createTaskHandler(
  req: Request<{}, {}, RequestTaskBody>,
  res: Response
) {
  const { name, description } = req.body;

  try {
    // call the service
    await createTask({ name, description });

    const tasks = await findAllTasks();

    return res.status(StatusCodes.CREATED).send(tasks);
  } catch (e: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}

// @desc    Update task
// @route   PATCH /api/tasks/:taskId
// @access  Public
export async function updateTaskHandler(
  req: Request<RequestTaskParams, {}, RequestTaskBody>,
  res: Response
) {
  const { taskId } = req.params;
  const { name, description } = req.body;

  const task = await findTask(taskId);

  if (!task) {
    return res.status(StatusCodes.NOT_FOUND).send("Task not found");
  }

  task.name = name;
  task.description = description;

  await task.save();

  return res.status(StatusCodes.OK).send(task);
}

// @desc    Delete task
// @route   DELETE /api/tasks/:taskId
// @access  Public
export async function deleteTaskHandler(
  req: Request<RequestTaskParams, {}, {}>,
  res: Response
) {
  const { taskId } = req.params;

  const task = await findTask(taskId);

  if (!task) {
    return res.status(StatusCodes.NOT_FOUND).send("Task not found");
  }

  const query = { _id: taskId };

  await deleteTask(query);

  const tasks = await findAllTasks();

  return res.status(StatusCodes.OK).send(tasks);
}
