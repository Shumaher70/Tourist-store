interface CustomButtonExitProps {
  buttonStyle?: string;
  onClick?: (index?: number) => void;
}

const CustomButtonExit = ({ buttonStyle, onClick }: CustomButtonExitProps) => {
  return (
    <div
      onClick={() => onClick?.()}
      className={`${
        buttonStyle ? 'absolute' : 'relative'
      } rounded-full bg-[#f1f1f1] w-10 h-10  flex justify-center items-center cursor-pointer ${buttonStyle} `}
    >
      <div className="absolute rotate-45 w-[45%] h-[5%] bg-black" />
      <div className="absolute -rotate-45  w-[45%] h-[5%] bg-black" />
    </div>
  );
};

export default CustomButtonExit;
