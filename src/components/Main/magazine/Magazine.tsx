import {
  Button,
  Typography,
  Card,
  CardHeader,
  CardBody,
} from '@material-tailwind/react';

const Magazine = () => {
  return (
    <div className="py-10 px-[10%] flex-col">
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
      <div className=" pt-10 w-full h-full flex flex-wrap gap-5 sm:justify-between justify-center">
        <Card className="shadow-none rounded-none cursor-pointer ">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src={require('./img-1.jpg')}
              alt="img1"
              className="object-cover xl:w-[400px] xl:h-[400px] lg:w-[370px] lg:h-[370px] md:w-[270px] md:h-[270px] w-[350px] h-[350px]"
            />
          </CardHeader>
          <CardBody className="p-0">
            <Typography
              variant="h4"
              color="black"
              className="uppercase font-normal"
            >
              HTP GOURMET CAMPING
            </Typography>
          </CardBody>
        </Card>
        <Card className="shadow-none rounded-none cursor-pointer ">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src={require('./img-2.webp')}
              alt="img3"
              className="object-cover xl:w-[400px] xl:h-[400px] lg:w-[370px] lg:h-[370px] md:w-[270px] md:h-[270px] w-[350px] h-[350px]"
            />
          </CardHeader>
          <CardBody className="p-0">
            <Typography
              variant="h4"
              color="black"
              className="uppercase font-normal"
            >
              Adventure
            </Typography>
          </CardBody>
        </Card>
        <Card className="shadow-none rounded-none cursor-pointer">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src={require('./img-3.webp')}
              alt="img3"
              className="object-cover xl:w-[400px] xl:h-[400px] lg:w-[370px] lg:h-[370px] md:w-[270px] md:h-[270px] w-[350px] h-[350px]"
            />
          </CardHeader>
          <CardBody className="p-0">
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
