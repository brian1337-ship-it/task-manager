// This is the parent api slice

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  Types
import { ITaskData } from "../../typings";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
