type Props = {
  label: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  fullWidth: boolean;
  handleButtonClick: () => void;
};

const Button = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  handleButtonClick,
}: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
      onClick={() => handleButtonClick()}
    >
      {label}
    </button>
  );
};

export default Button;
