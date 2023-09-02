import React, { useState, useEffect } from "react";
import { Button, Modal, TaskCard } from "../components";
import { setTasks, setTaskData, updateTasks } from "../slices/taskSlice";
import { useAppSelector, useAppDispatch } from "../custom_hooks/reduxHooks";
import { toast } from "react-toastify";
import { useUpdateTaskMutation } from "../slices/taskApiSlice";

const TaskList = () => {
  const { tasks } = useAppSelector((state) => state.taskManager);

  // modal visibility
  const [showModal, setShowModal] = useState<boolean>(false);

  //  the state
  const { taskData } = useAppSelector((state) => state.taskManager);

  const [updateTask, { isLoading, isSuccess }] = useUpdateTaskMutation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading) {
      toast.loading("Processing...");
    } else if (isSuccess) {
      toast.success("Task updated");
    }

    return () => {
      toast.dismiss();
    };
  }, [isLoading, isSuccess]);

  // handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    dispatch(setTaskData({ name, value }));
  };

  // Close the modal
  const handleCloseModal = () => {
    setShowModal(false);

    dispatch(setTaskData(null));
  };

  // update the task
  const handleUpdateTaskButton = async () => {
    const { name, description } = taskData;

    // check if input fields are empty
    if (
      name === "" ||
      name === undefined ||
      description === "" ||
      description === undefined
    ) {
      toast(" Fields can't be empty ", {
        duration: 6000,
      });
    } else {
      try {
        const res = await updateTask(taskData).unwrap();

        // save response data in global store
        dispatch(updateTasks(res));
        setShowModal(false);
        dispatch(setTaskData(null));
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <section className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 max-container ">
      {tasks?.map((task, i) => (
        <TaskCard key={i} {...task} openModal={() => setShowModal(true)} />
      ))}

      {/* The Modal */}
      <Modal isVisible={showModal} onClose={() => handleCloseModal()}>
        <div className="p-6">
          <h3 className=" text-xl font-semibold text-gray-900 mb-5 ">
            Create Task
          </h3>

          <div className="w-full max-w-lg ">
            <div className="bg-white  rounded md:px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Task
                </label>
                <input
                  className="block appearance-none border  w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-sm text-gray-900 bg-gray-50 rounded-lg  border-gray-300"
                  type="text"
                  required
                  onChange={handleChange}
                  value={taskData["name"] || ""}
                  name="name"
                  placeholder="Enter Task Name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>

                <div className="max-w-2xl mx-auto">
                  <textarea
                    rows="4"
                    className="block p-2.5 appearance-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  focus:outline-none focus:shadow-outline  "
                    type="text"
                    required
                    onChange={handleChange}
                    value={taskData["description"] || ""}
                    name="description"
                    placeholder="Task descriiption..."
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <div className="mt-11 flex flex-wrap gap-4">
                  <Button
                    label="Update"
                    handleButtonClick={() => handleUpdateTaskButton()}
                  />

                  <Button
                    label="Cancel"
                    backgroundColor="bg-white"
                    borderColor="border-slate-gray"
                    textColor="text-slate-gray"
                    handleButtonClick={() => handleCloseModal()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default TaskList;
