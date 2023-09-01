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


  }),
});


export const { useCreateMutation } = taskApiSlice;
