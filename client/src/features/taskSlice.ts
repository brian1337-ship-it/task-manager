import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Types
import { ITask } from "../../typings";

type taskManagerState = {
  tasks: ITask[];
};

export const initialState: taskManagerState = {
  tasks: [
    {
      imgURL: "IMG",
      label: "Go shopping",
      subtext:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
      imgURL: "IMG",
      label: "Pay bills",
      subtext:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
      imgURL: "IMG",
      label: "task 2",
      subtext:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
      imgURL: "IMG",
      label: "task 3",
      subtext:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
      imgURL: "IMG",
      label: "task 4",
      subtext:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
      imgURL: "IMG",
      label: "task 5",
      subtext:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
  ],
};

export const taskSlice = createSlice({
  name: "taskManager",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<tasks[]>) => {
      state.tasks = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTasks } = taskSlice.actions;

// export reducer
export default taskSlice.reducer;
