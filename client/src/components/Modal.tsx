import React from "react";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isVisible, onClose, children }: Props) => {
  if (!isVisible) return null;

  // close the modal if out of focus
  const handleClose = (e: React.MouseEventHandler<HTMLDivElement>) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className=" w-[90%] mx-auto md:w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end "
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
