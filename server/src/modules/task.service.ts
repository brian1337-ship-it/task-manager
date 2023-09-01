import { Task, TaskModel } from "./task.model";

// database calls

export async function findAllTasks() {
  return TaskModel.find({});
}

export async function createTask(task: Task) {
  return TaskModel.create(task);
}

export async function findTask(_id: string) {
  return TaskModel.findOne({ _id });
}

export async function deleteTask(query: { _id: string }) {
  return TaskModel.deleteOne(query);
}
