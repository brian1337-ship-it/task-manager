import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Types
import { ITaskData } from "../../typings";

type taskManagerState = {
  tasks: ITaskData[];
  taskData: ITaskData;
};

export const initialState: taskManagerState = {
  tasks: [
    {
      id: 1,
      name: "Go shopping",
      description:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
      id: 12,
      name: "Pay bills",
      description:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
      id: 14,
      name: "task 2",
      description:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
      id: 16,
      name: "task 3",
      description:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
      id: 18,
      name: "task 4",
      description:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
      id: 19,
      name: "task 5",
      description:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
  ],
  taskData: {} as ITaskData,
};

export const taskSlice = createSlice({
  name: "taskManager",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<tasks[]>) => {
      state.tasks = action.payload;
    },

    setTaskData: (state, action: PayloadAction<ITaskData | null>) => {
      // update the task data input value
      if (action.payload) {
        const { name, value } = action.payload;
        state.taskData = { ...state.taskData, [name]: value };
      } else {
        // reset the task data
        state.taskData = {};
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTasks, setTaskData } = taskSlice.actions;

// export reducer
export default taskSlice.reducer;
