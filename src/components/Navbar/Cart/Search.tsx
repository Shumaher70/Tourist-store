import { useDispatch } from 'react-redux';
import { toggleSearch } from '../../../store/redusers/sideBarReduser';
const Search = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(toggleSearch());
  };
  return (
    <svg
      onClick={clickHandler}
      className="cursor-pointer"
      height="26"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.90632 15.2124C11.7206 15.2124 14.8126 12.103 14.8126 8.26745C14.8126 4.43187 11.7206 1.32251 7.90632 1.32251C4.09206 1.32251 1 4.43187 1 8.26745C1 12.103 4.09206 15.2124 7.90632 15.2124Z"
        stroke="#1D1D1B"
        strokeWidth="1.3419"
        strokeMiterlimit="10"
      />
      <path
        d="M12.6299 13.3412L18.3822 18.8288"
        stroke="#1D1D1B"
        strokeWidth="1.3419"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Search;
