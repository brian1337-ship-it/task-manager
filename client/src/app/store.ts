import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskSlice";

export const store = configureStore({
  reducer: {
    taskManager: taskReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
