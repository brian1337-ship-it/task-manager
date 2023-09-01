import { object, string, TypeOf } from "zod";

export const taskSchema = {
  body: object({
    name: string({
      required_error: "Task name is required",
    }),
    description: string({
      required_error: "Task description is required",
    }),
  }),
  params: object({
    taskId: string(),
  }),
};

export type RequestTaskBody = TypeOf<typeof taskSchema.body>;
export type RequestTaskParams = TypeOf<typeof taskSchema.params>;