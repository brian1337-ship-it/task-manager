import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CreateTaskBody, UpdateTaskParams } from "./task.schema";
import { createTask, findTask } from "./task.service";

// create task handler
export async function createTaskHandler(
  req: Request<{}, {}, CreateTaskBody>,
  res: Response
) {
  const { name, description } = req.body;

  //   create the task
  try {
    // call the service
    await createTask({ name, description });

    return res.status(StatusCodes.CREATED).send("Task created successfully");
  } catch (e: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}

// update task handler

export async function updateTaskHandler(
  req: Request<UpdateTaskParams, {}, CreateTaskBody>,
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
