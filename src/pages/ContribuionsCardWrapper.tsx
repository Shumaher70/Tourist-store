import { Button, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

interface ContribuionsCardWrapperProps {
  children?: React.ReactNode;
  path?: string;
  buttonTitle?: string;
  buttonStyle?: string;
}

const ContribuionsCardWrapper = ({
  children,
  path,
  buttonTitle,
  buttonStyle,
}: ContribuionsCardWrapperProps) => {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="flex justify-between w-full">
        <Typography
          variant="h2"
          className="font-normal uppercase text-2xl sm:text-4xl"
        >
          MORE CONTRIBUTIONS
        </Typography>
        <NavLink to={path ? path : ''}>
          <Button
            color="white"
            className={`rounded-none border-[1px] border-[#000000] ${
              buttonStyle ? buttonStyle : ''
            }`}
          >
            {buttonTitle}
          </Button>
        </NavLink>
      </div>
      {children}
    </div>
  );
};

export default ContribuionsCardWrapper;
