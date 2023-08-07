import { Button, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const PageMissed = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <div className="lg:w-[49%]">
          <img src={require('./missed.webp')} alt="missed" />
        </div>
        <div className="lg:w-[49%] w-full flex justify-center items-center">
          <div className="py-[5%] px-[10%]">
            <Typography className="mt-2" variant="h2" color="black">
              PAGE WAS NOT FOUND
            </Typography>
            <Typography className="mt-2" variant="paragraph" color="black">
              This page no longer seems to exist.
            </Typography>
            <NavLink to="">
              <Button
                color="white"
                className="mt-2 rounded-none bg-black text-white"
                size="lg"
              >
                HOMEPAGE
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageMissed;
