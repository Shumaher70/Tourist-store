import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Button, Checkbox, Input, Typography } from '@material-tailwind/react';

const RegisterPage = () => {
  const height = useSelector((state: RootState) => state.size.heightNav);

  return (
    <div style={{ paddingTop: `${height}px` }}>
      <div className="flex flex-col sm:flex-row">
        <div className="flex relative flex-1">
          <img
            src={require('./img/RegisterPageImg.webp')}
            alt="img"
            className="object-cover"
          />
        </div>
        <div className="px-[5%] py-[5%] flex flex-col relative flex-1">
          <Typography variant="h3" className="text-center">
            YOUR ADVANTAGES
          </Typography>
          <Typography className="mt-10">
            An account brings you many advantages: Get a convenient order
            overview, manage all data, get details about order status and
            tracking information and manage your newsletter!
          </Typography>
          <form className="mt-10">
            <div className="flex justify-between flex-col flex-1 gap-5">
              <Input
                className="text-black"
                color="black"
                label="NAME"
                type="text"
                required
              />
              <Input
                required
                className="text-black"
                color="black"
                label="LAST NAME"
                type="text"
              />
              <Input
                required
                className="text-black"
                color="black"
                label="E-MAIL ADDRESS"
                type="email"
              />
              <Input
                required
                className="text-black"
                color="black"
                label="PASSWORD"
                type="password"
              />

              <Typography>
                We do not share your data with third parties without your
                express consent. You can find our privacy policy here.
              </Typography>

              <Checkbox
                className="h-5 w-5 rounded-none checked:bg-black border-black checked:border-black transition-all hover: hover:before:opacity-0 text-black"
                containerProps={{ className: 'rounded-none p-0 mr-2' }}
                labelProps={{
                  className: 'text-black font-normal text-sm',
                }}
                ripple={false}
                label="I agree to the terms and conditions from the general data protection."
                required
              />

              <Checkbox
                className="h-5 w-5 rounded-none checked:bg-black border-black checked:border-black transition-all hover: hover:before:opacity-0 text-black"
                containerProps={{ className: 'rounded-none p-0 mr-2' }}
                labelProps={{
                  className: 'text-black font-normal text-sm',
                }}
                ripple={false}
                label="I would like to receive news and offers via e-mail"
                required
              />

              <Button
                type="submit"
                className="rounded-none text-white bg-black w-full"
              >
                <Typography className="w-full">REGISTER</Typography>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
