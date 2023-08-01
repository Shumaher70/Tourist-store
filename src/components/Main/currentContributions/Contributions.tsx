import {
  Typography,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';

const Contributions = () => {
  return (
    <div>
      <div className="px-[10%] py-[5%]">
        <div className="w-full flex justify-between items-center">
          <Typography
            variant="h2"
            color="black"
            className="sm:text-4xl text-2xl"
          >
            CURRENT CONTRIBUTIONS
          </Typography>
          <Button
            color="white"
            className="border-[1px] border-black rounded-none"
          >
            DISCOVER
          </Button>
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-10">
          <img
            src={require('./main.jpg')}
            alt="main"
            className="sm:w-[49%] w-full max-h-[550px] object-cover"
          />
          <div className="sm:w-[49%] w-full flex flex-col justify-between">
            <div>
              <Typography
                varian="h2"
                color="black"
                className="sm:text-4xl text-2xl border-t-[1px] border-b-[1px] border-black sm:mb-10 pb-20"
              >
                MAHARISHI X HEIMPLANET
              </Typography>
              <Typography variant="paragraph" color="black">
                London-based streetwear label Maharishi and HEIMPLANET celebrate
                nature with a DPM: Golden Tigerstripe Camouflage.
              </Typography>
            </div>
            <div>
              <Button
                color="white"
                size="lg"
                className="bg-black text-white rounded-none"
              >
                READ MORE
              </Button>
            </div>
          </div>
        </div>
        <div className="py-10 flex flex-wrap gap-5 pt-[5%] justify-between">
          <Card className="shadow-none rounded-none w-[30%] sm:min-w-[256px] min-w-full">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={require('./card-1.webp')}
                alt="img1"
                className="object-cover cursor-pointer"
              />
            </CardHeader>
            <CardBody className="p-0 mt-5">
              <Typography
                variant="h4"
                color="black"
                className="uppercase font-normal"
              >
                SUP ADVENTURES - DOORSTEP TO OCEAN IN ONE DAY
              </Typography>
            </CardBody>
            <CardFooter className="p-0 mt-5">
              <Typography
                variant="paragraph"
                color="black"
                className="border-t-[1px] border-black"
              >
                It was a sunny day when we decided to explore the pristine
                nature right outside our doorstep.
              </Typography>
            </CardFooter>
          </Card>
          <Card className="shadow-none rounded-none w-[30%] sm:min-w-[256px] min-w-full">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={require('./card-2.jpg')}
                alt="img2"
                className="object-cover cursor-pointer"
              />
            </CardHeader>
            <CardBody className="p-0 mt-5">
              <Typography
                variant="h4"
                color="black"
                className="uppercase font-normal "
              >
                OUR TIPS FOR TRAVELING LIGHT
              </Typography>
            </CardBody>
            <CardFooter className="p-0 mt-5">
              <Typography
                variant="paragraph"
                color="black"
                className="border-t-[1px] border-black"
              >
                Space-saving and lightweight packing is a fundamental skill for
                any globetrotter.
              </Typography>
            </CardFooter>
          </Card>
          <Card className="shadow-none rounded-none w-[30%] sm:min-w-[256px] min-w-full">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={require('./card-3.webp')}
                alt="img3"
                className="object-cover cursor-pointer"
              />
            </CardHeader>
            <CardBody className="p-0 mt-5">
              <Typography
                variant="h4"
                color="black"
                className="uppercase font-normal"
              >
                CAMPING IN GERMANY
              </Typography>
            </CardBody>
            <CardFooter className="p-0 mt-5">
              <Typography
                variant="paragraph"
                color="black"
                className="border-t-[1px] border-black"
              >
                More openings are in sight and it's time to plan the first trips
                outdoors. If you want to spend a night at a campsite in
                beautiful surroundings in Germany without being woken up by
                slamming car doors or motorhome generators, only to find that
                the first thing you see is a wall of caravans, it's not so easy.
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
