import React, { useEffect, useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useAppDispatch } from "../custom_hooks/reduxHooks";
import { setTasks, updateTaskData, updateTasks } from "../slices/taskSlice";
import { useDeleteTaskMutation } from "../slices/taskApiSlice";
import { toast } from "react-toastify";

type Props = {
  name: string;
  openModal: () => void;
  description: string;
};

const TaskCard = ({ _id, name, description, openModal }: Props) => {
  const dispatch = useAppDispatch();

  const [deleteTask, { isLoading, isSuccess }] = useDeleteTaskMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("Processing...");
    } else if (isSuccess) {
      toast.success("Task deleted");
    }

    return () => {
      toast.dismiss();
    };
  }, [isLoading, isSuccess]);

  const handleUpdate = () => {
    dispatch(updateTaskData({ _id, name, description }));
    openModal();
  };

  const handleDelete = async () => {
    try {
      const res = await deleteTask(_id).unwrap();

      dispatch(setTasks(res));
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-between w-full max-sm:w-full rounded-[20px] shadow-3xl px-10 pt-10 pb-8 ">
      <div>
        <h3 className="mt-2 font-palanquin text-3xl leading-normal font-bold">
          {name}
        </h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
          {description}
        </p>
      </div>

      <div className="w-full flex justify-end items-center space-x-2">
        {/* <img src={imgURL} alt={label} width={24} height={24} /> */}

        <TrashIcon
          className="h-5 w-5 text-blue-500 cursor-pointer "
          onClick={() => handleDelete()}
        />
        <PencilSquareIcon
          className="h-5 w-5 text-blue-500 cursor-pointer "
          onClick={() => handleUpdate()}
        />
      </div>
    </div>
  );
};

export default TaskCard;
