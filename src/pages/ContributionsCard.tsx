import {
   Card,
   CardBody,
   CardFooter,
   CardHeader,
   Typography,
} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

interface ContributionsCardProps {
   title?: string;
   description?: string;
   img?: string;
   path?: string;
}

const ContributionsCard = ({
   title,
   description,
   img,
   path,
}: ContributionsCardProps) => {
   return (
      <Card className="shadow-none rounded-none min-w-[250px] flex-1 bg-transparent">
         <NavLink
            onClick={() => window.scrollTo(0, 0)}
            to={`${path ? path : '/'}`}
         >
            <CardHeader
               floated={false}
               shadow={false}
               color="transparent"
               className="m-0 rounded-none"
            >
               <img
                  src={`${
                     img ? require(`./img/${img}`) : require('./img/error.jpg')
                  }`}
                  alt={img}
                  className="w-full object-cover cursor-pointer"
               />
            </CardHeader>
         </NavLink>
         <CardBody className="p-0 mt-2">
            <Typography
               variant="h4"
               color="black"
               className="uppercase font-normal"
            >
               {title}
            </Typography>
         </CardBody>
         <CardFooter className="p-0 mt-2">
            <Typography
               variant="paragraph"
               color="black"
               className="border-t-[1px] border-black"
            >
               {description}
            </Typography>
         </CardFooter>
      </Card>
   );
};

export default ContributionsCard;
