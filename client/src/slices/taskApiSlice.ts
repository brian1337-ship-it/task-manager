import { apiSlice } from "./apiSlice";

// the tasks URL (the resource)
const TASKS_URL = "/api/tasks";

export const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateTask: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URL}/` + data._id,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteTask: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URL}/` + data,
        method: "DELETE",
      }),
    }),
    getAllTasks: builder.query({
      query: () => `${TASKS_URL}`,
    }),
  }),
});

export const {
  useCreateMutation,
  useUpdateTaskMutation,
  useGetAllTasksQuery,
  useDeleteTaskMutation,
} = taskApiSlice;
