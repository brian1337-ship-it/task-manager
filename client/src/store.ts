import { configureStore } from "@reduxjs/toolkit";
// Slice reducers
import taskReducer from "./slices/taskSlice";
import { apiSlice } from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    taskManager: taskReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
