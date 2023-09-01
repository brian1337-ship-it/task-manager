import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CreateTaskBody } from "./task.schema";
import { createTask } from "./task.service";

// the handler
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
