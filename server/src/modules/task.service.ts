import { Task, TaskModel } from "./task.model";

// database calls

export async function createTask(task: Task) {
  return TaskModel.create(task);
}
