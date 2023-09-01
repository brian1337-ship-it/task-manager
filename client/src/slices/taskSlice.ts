import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Types
import { ITaskData } from "../../typings";

type taskManagerState = {
  tasks: ITaskData[];
  taskData: ITaskData;
};

export const initialState: taskManagerState = {
  tasks: [],
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
