export const CustomRightArrow = ({ ...rest }) => {
  const { onClick } = rest;
  return (
    <button
      className="absolute right-0 rounded-full transition linear  duration-250 hover:bg-black hover:text-white "
      onClick={() => onClick()}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex justify-center items-center"
      >
        <path
          d="M6 3L11 8L6 13"
          stroke="CurrentColor"
          strokeWidth="1"
          className="block"
        ></path>
      </svg>
    </button>
  );
};
export const CustomLeftArrow = ({ ...rest }) => {
  const { onClick } = rest;
  return (
    <button
      className=" absolute left-0 rounded-full  rotate-180 transition linear  duration-250 hover:bg-black hover:text-white "
      onClick={() => onClick()}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1"></path>
      </svg>
    </button>
  );
};
