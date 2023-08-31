import { useState } from "react";
import { Button, Modal } from "../components";

const Head = () => {
  // modal visibility
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <section className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Task Manager</h2>

        <Button
          label="Create Task"
          handleButtonClick={() => setShowModal(true)}
        />
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="p-6">
          <h3 className=" text-xl font-semibold text-gray-900 mb-5 ">
            Create Task
          </h3>

          <div className="w-full max-w-lg ">
            <form className="bg-white  rounded md:px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Task
                </label>
                <input
                  className="block appearance-none border  w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline     text-sm text-gray-900 bg-gray-50 rounded-lg  border-gray-300"
                  type="text"
                  placeholder="Task Name"
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
                    placeholder="Task descriiption..."
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <div className="mt-11 flex flex-wrap gap-4">
                  <Button
                    label="Create"
                    handleButtonClick={() => setShowModal(true)}
                  />

                  <Button
                    label="Cancel"
                    backgroundColor="bg-white"
                    borderColor="border-slate-gray"
                    textColor="text-slate-gray"
                    handleButtonClick={() => setShowModal(false)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Head;
