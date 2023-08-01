import { Typography, Button } from '@material-tailwind/react';

const Inspiration = () => {
  return (
    <div className="relative max-w-full">
      <img
        src={require('./inspiration-bg.webp')}
        alt="inspiration"
        className="absolute z-[-1] w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-black opacity-30" />
      <div className="relative flex-col py-[5%] px-[10%]  xl:w-2/4 sm:w-3/4 w-full">
        <Typography
          variant="h2"
          color="white"
          className="border-t-[1px] border-b-[1px] border-white sm:text-4xl text-2xl"
        >
          HEIMPLANET IS INSPIRED BY THE EXCITEMENT OF TRAVEL.
        </Typography>
        <Typography variant="paragraph" color="white" className="mt-5">
          When you travel, you feel alive. All your senses are awake and you
          always expect something new. You are constantly adapting to new
          situations, new people, new cultures and new environments.
        </Typography>
        <div className="mt-5 flex ">
          <Button color="white" className="rounded-none">
            ABOUT AS
          </Button>
          <Button
            variant="text"
            className="rounded-none text-white border-[1px] border-white ml-5"
          >
            RE:STORE PROGRAM
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
