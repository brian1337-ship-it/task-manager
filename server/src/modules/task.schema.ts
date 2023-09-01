import { object, string, TypeOf } from "zod";

export const createTaskSchema = {
  body: object({
    name: string({
      required_error: "Task name is required",
    }),
    description: string({
      required_error: "Task description is required",
    }),
  }),
};

export type CreateTaskBody = TypeOf<typeof createTaskSchema.body>;
