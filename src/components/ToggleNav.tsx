import { useState } from 'react';

const ToggleNav = () => {
  const [trigger, setTrigger] = useState(false);
  const clickHanlder = () => {
    setTrigger((previous) => !previous);
  };

  const top = trigger ? 'rotate-45 top-[50%]' : 'top-[40%]';
  const bottom = trigger ? '-rotate-45 top-[50%]' : 'bottom-[40%]';
  return (
    <div
      onClick={clickHanlder}
      className="fixed bottom-10 right-10 bg-black w-[75px] h-[75px] rounded-full cursor-pointer z-50"
    >
      <div
        className={`absolute transition-all ${top} right-[50%] translate-x-[50%] w-[30px] h-[5px] bg-white`}
      ></div>
      <div
        className={`absolute transition-all ${bottom} right-[50%] translate-x-[50%] w-[30px] h-[5px] bg-white`}
      ></div>
    </div>
  );
};

export default ToggleNav;
