import { useEffect } from "react";
import { TaskList } from "./sections";
import { Head } from "./sections";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetAllTasksQuery } from "./slices/taskApiSlice";

const App = () => {
  // const [allTasks] = useGetAllTasksQuery();

  // useEffect(() => {
  //   const fetchAllTasks = async () => {
  //     try {
  //       const res = await allTasks().unwrap();

  //       console.log(res);
  //     } catch (err) {

  //     }
  //   };

  //   fetchAllTasks();
  // }, []);

  return (
    <main className="relative">
      <ToastContainer position="bottom-right" />
      <section className="padding">
        <Head />
      </section>
      <section className="padding-x py-10">
        <TaskList />
      </section>
    </main>
  );
};

export default App;
