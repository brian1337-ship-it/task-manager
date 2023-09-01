import React, { useState, useEffect } from "react";
import { Button, Modal } from "../components";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import { setTaskData, setTasks } from "../slices/taskSlice";
import { toast } from "react-toastify";
import { useCreateMutation } from "../slices/taskApiSlice";
import { useFirstRender } from "../custom_hooks/useFirstRender";

const Head = () => {
  // modal visibility
  const [showModal, setShowModal] = useState<boolean>(false);

  //  the state
  const { taskData } = useAppSelector((state) => state.taskManager);

  const [create, { isLoading }] = useCreateMutation();

  const dispatch = useAppDispatch();

  const firstRender = useFirstRender();

  useEffect(() => {
    if (!firstRender && isLoading) {
      toast.loading("Submitting...");
    }

    return () => {
      toast.dismiss();
    };
  }, [isLoading, firstRender]);

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

  // submit handler
  const handleCreateTaskButton = async () => {
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
        const res = await create(taskData).unwrap();

        // save response data in global store
        dispatch(setTasks(res));
        setShowModal(false);
        dispatch(setTaskData(null));
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <section className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Task Manager</h2>

        <Button
          label="Create Task"
          handleButtonClick={() => setShowModal(true)}
        />
      </div>

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
                    label="Create"
                    handleButtonClick={() => handleCreateTaskButton()}
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

export default Head;
