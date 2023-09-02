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
    setTasks: (state, action: PayloadAction<ITaskData[]>) => {
      // initialize task list
      state.tasks = action.payload;
    },

    setTaskData: (state, action: PayloadAction<ITaskData | null>) => {
      // update the task input field value
      if (action.payload) {
        const { name, value } = action.payload;
        state.taskData = { ...state.taskData, [name]: value };
      } else {
        // reset the task data
        state.taskData = {} as ITaskData;
      }
    },

    updateTaskData: (state, action: PayloadAction<ITaskData | null>) => {
      // update the task data input value
      if (action.payload) {
        const { _id, name, description } = action.payload;
        state.taskData = {
          ...state.taskData,
          ["_id"]: _id,
          ["name"]: name,
          ["description"]: description,
        };
      } else {
        // reset the task data
        state.taskData = {} as ITaskData;
      }
    },

    updateTasks: (state, action: PayloadAction<ITaskData>) => {
      // update specific task

      const { _id, name, description } = action.payload;

      //  find index of specific task
      const objIndex = state.tasks.findIndex(
        (obj: ITaskData) => obj._id == _id
      );

      //Update tasks's properties.
      state.tasks[objIndex] = { ...state.tasks[objIndex], ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTasks, setTaskData, updateTaskData, updateTasks } =
  taskSlice.actions;

// export reducer
export default taskSlice.reducer;
