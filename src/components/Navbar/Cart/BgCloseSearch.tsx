import { useDispatch } from 'react-redux';
import { toggleSearch } from '../../../store/redusers/sideBarReduser';

const BgCloseSearch = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(toggleSearch());
  };
  return (
    <div
      onClick={clickHandler}
      className="bg-gray-900 opacity-50 w-full h-full cursor-pointer absolute z-20"
    ></div>
  );
};

export default BgCloseSearch;
