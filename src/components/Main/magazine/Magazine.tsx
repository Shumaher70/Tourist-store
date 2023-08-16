import {
  Button,
  Typography,
  Card,
  CardHeader,
  CardBody,
} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const Magazine = () => {
  return (
    <div className="py-[5%] px-[10%] flex-col">
      <div className="flex justify-between items-center">
        <Typography
          variant="h2"
          color="black"
          className="uppercase font-normal text-2xl lg:text-4xl"
        >
          Magazine
        </Typography>
        <Button
          color="white"
          className="rounded-none border-[1px] border-black"
        >
          DISCOVER
        </Button>
      </div>
      <div className="pt-[5%] flex flex-wrap gap-5 justify-between">
        <Card className="shadow-none rounded-none cursor-pointer w-[32%] xl:min-w-[400px] lg:min-w-[390px] sm:min-w-[290px] min-w-full ">
          <NavLink to="/blogs/gourmet-camping">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={require('./img-1.jpg')}
                alt="img1"
                className="object-cover"
              />
            </CardHeader>
            <CardBody className="p-0 mt-5">
              <Typography
                variant="h4"
                color="black"
                className="uppercase font-normal"
              >
                HTP GOURMET CAMPING
              </Typography>
            </CardBody>
          </NavLink>
        </Card>

        <Card className="shadow-none rounded-none cursor-pointer w-[32%] xl:min-w-[400px] lg:min-w-[390px] sm:min-w-[290px] min-w-full">
          <NavLink to="/blogs/abenteuer">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={require('./img-2.webp')}
                alt="img2"
                className="object-cover"
              />
            </CardHeader>
            <CardBody className="p-0 mt-5">
              <Typography
                variant="h4"
                color="black"
                className="uppercase font-normal"
              >
                Adventure
              </Typography>
            </CardBody>
          </NavLink>
        </Card>
        <Card className="shadow-none rounded-none cursor-pointer w-[32%] xl:min-w-[400px] lg:min-w-[390px] sm:min-w-[290px] min-w-full ">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src={require('./img-3.jpg')}
              alt="img3"
              className="object-cover"
            />
          </CardHeader>
          <CardBody className="p-0 mt-5">
            <Typography
              variant="h4"
              color="black"
              className="uppercase font-normal"
            >
              PRODUCT COLLABS
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Magazine;
