import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskSlice";

export const store = configureStore({
  reducer: {
    taskManager: taskReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
