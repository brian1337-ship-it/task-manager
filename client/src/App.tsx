import { useEffect } from "react";
import { TaskList } from "./sections";
import { Head } from "./sections";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetAllTasksQuery } from "./slices/taskApiSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "./custom_hooks/reduxHooks";
import { setTasks } from "./slices/taskSlice";

const App = () => {
  const {
    data: allTasks,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllTasksQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...");
    } else if (isSuccess) {
      // to initialize task list in global store
      dispatch(setTasks(allTasks));
    } else if (isError) {
      toast.error(error);
    }

    return () => {
      toast.dismiss();
    };
  }, [isLoading, isSuccess, isError, error, allTasks, dispatch]);

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
