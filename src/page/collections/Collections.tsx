import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { Breadcrumbs } from '@material-tailwind/react';

const Colections = () => {
  const sizeSlice = useSelector((state: RootState) => state.size.heightNav);

  return (
    <div style={{ marginTop: `${sizeSlice}` }}>
      <div className="flex flex-wrap px-[10%] py-[5%]">
        <div className="flex flex-col w-[49%]">
          <Breadcrumbs>
            <a href="/" className="opacity-60">
              HOME
            </a>
            <a href="/Collections" className="opacity-60">
              Collections
            </a>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};

export default Colections;
