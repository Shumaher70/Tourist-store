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
      className="fixed bg-gray-900 opacity-50 w-full h-full cursor-pointer z-30"
    ></div>
  );
};

export default BgCloseSearch;
