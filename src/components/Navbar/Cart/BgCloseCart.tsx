import { useDispatch } from 'react-redux';
import { toggleCart } from '../../../store/redusers/sideBarReduser';

const BgCloseCart = () => {
  const dipatch = useDispatch();

  const clickHandler = () => dipatch(toggleCart());
  return (
    <div
      onClick={clickHandler}
      className="absolute w-full h-full bg-gray-900 opacity-80 cursor-pointer z-20"
    ></div>
  );
};

export default BgCloseCart;
