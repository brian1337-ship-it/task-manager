import React, { useState } from "react";
import { TaskCard } from "../components";

const Tasks = () => {
  const [task, setTask] = useState([
    {
      imgURL: "IMG",
      label: "Go shopping",
      subtext:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
      imgURL: "IMG",
      label: "Payment bills",
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
  ]);

  return (
    <section className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
      {task.map((mytask) => (
      

        <TaskCard key={mytask.label} {...mytask} />
      ))}
    </section>
  );
};

export default Tasks;
