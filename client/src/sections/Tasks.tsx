import React, { useState } from "react";
import { TaskCard } from "../components";
import { setTasks } from "../features/taskSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const Tasks = () => {
  const { tasks } = useAppSelector((state) => state.taskManager);

  return (
    <section className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 max-container ">
      {tasks.map((task) => (
        <TaskCard key={task.label} {...task} />
      ))}
    </section>
  );
};

export default Tasks;
