import { Button, Typography } from '@material-tailwind/react';
import TemplatePage from './TemplatePage';
import { NavLink } from 'react-router-dom';

interface AmbassadorCardProps {
   img: string;
   title: string;
   description: string;
   src?: string;
}

const AmbassadorsPage = () => {
   const AmbassadorCard: React.FC<AmbassadorCardProps> = ({
      img,
      title,
      description,
      src,
   }) => {
      return (
         <div className="flex flex-col flex-1">
            <img
               src={require(`../pages/img/${img ? img : 'missed-img.webp'}`)}
               alt={img}
               className="object-cover h-[50vh] w-[100vw]"
            />
            <Typography className="text-2xl font-normal mt-3">
               {title}
            </Typography>
            <Typography className="mt-3">{description}</Typography>
            <div>
               {src ? (
                  <NavLink to={src}>
                     <Button
                        className="
                  rounded-none
                  border-[1px]
                  border-black
                  bg-white
                  text-black
                  hover:bg-black
                  hover:text-white
                  transition
                  mt-3
               "
                     >
                        LERN MORE
                     </Button>
                  </NavLink>
               ) : (
                  <Button
                     className="
                  rounded-none
                  border-[1px]
                  border-black
                  bg-white
                  text-black
                  hover:bg-black
                  hover:text-white
                  transition
                  mt-3
               "
                  >
                     LERN MORE
                  </Button>
               )}
            </div>
         </div>
      );
   };

   return (
      <>
         <TemplatePage
            title="ambassadors"
            titleStyle="uppercase"
            description="WE ARE THE SUM OF THE PEOPLE WHO SURROUND US. THIS IS OUR LIST OF INCREDIBLE PERSONALITIES."
            img="ambassadorMain.webp"
            buttonTitle="learn more"
            buttonStyle="bg-black"
         />
         <div className="wrapper grid sm:grid-cols-2 grid-cols-1 gap-5">
            <AmbassadorCard
               img={'ambassadorsCard1.jpg'}
               title={'MAX MÜNCH'}
               description={
                  'Because only those who know what wanderlust means can tell others where paradise begins.'
               }
            />
            <AmbassadorCard
               img={'ambassadorsCard2.webp'}
               title={'KASPER HØGLUND'}
               description={
                  'Getting to places that does not necessarily have to be remote and epic and staying there.'
               }
            />
         </div>
      </>
   );
};

export default AmbassadorsPage;
