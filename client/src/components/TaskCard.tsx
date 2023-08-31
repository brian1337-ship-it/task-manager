import React from "react";
import { ITaskData as IProps } from "../../typings";

const TaskCard = ({ name, description }: IProps) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full rounded-[20px] shadow-3xl px-10 py-10">
      <h3 className="mt-2 font-palanquin text-3xl leading-normal font-bold">
        {name}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {description}
      </p>

      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        {/* <img src={imgURL} alt={label} width={24} height={24} /> */}
        {/* {IMG} */}
      </div>
    </div>
  );
};

export default TaskCard;
