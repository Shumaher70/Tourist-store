import {
   Button,
   Typography,
   Card,
   CardHeader,
   CardBody,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
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

            <Link to="/pages/blog" onClick={() => window.scrollTo(0, 0)}>
               <Button
                  color="white"
                  className="rounded-none border-[1px] border-black"
               >
                  DISCOVER
               </Button>
            </Link>
         </div>

         <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5">
            <Card className="rounded-none shadow-none">
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
                        className="w-full h-full object-cover"
                     />
                  </CardHeader>
                  <CardBody className="p-0 mt-2">
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

            <Card className="rounded-none shadow-none">
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
                        className="w-full h-full 2xl:h-[50vh] xl:h-[40vh] lg:h-[30vh] object-cover"
                     />
                  </CardHeader>
                  <CardBody className="p-0 mt-2">
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
            <Card className="rounded-none shadow-none">
               <NavLink to="/blogs/collabs">
                  <CardHeader
                     floated={false}
                     shadow={false}
                     color="transparent"
                     className="m-0 rounded-none"
                  >
                     <img
                        src={require('./img-3.jpg')}
                        alt="img3"
                        className="w-full h-full object-cover"
                     />
                  </CardHeader>
                  <CardBody className="p-0 mt-2">
                     <Typography
                        variant="h4"
                        color="black"
                        className="uppercase font-normal"
                     >
                        PRODUCT COLLABS
                     </Typography>
                  </CardBody>
               </NavLink>
            </Card>
         </div>
      </div>
   );
};

export default Magazine;
