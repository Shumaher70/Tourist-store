import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  showAction,
  hiddeAction,
} from '../store/redusers/mobailNavAccordionReducer';

const ToggleNav = () => {
  const dispatch = useDispatch();
  const [trigger, setTrigger] = useState(false);
  const clickHanlder = () => {
    setTrigger((previous) => !previous);
    if (trigger) {
      dispatch(hiddeAction());
    } else {
      dispatch(showAction());
    }
  };

  const top = trigger ? 'rotate-45 top-[45%]' : 'top-[40%]';
  const bottom = trigger ? '-rotate-45 top-[45%]' : 'bottom-[40%]';
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
