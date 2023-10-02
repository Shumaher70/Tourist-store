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
            id="ambassador"
         />
         <div
            id="ambassador"
            className="wrapper grid sm:grid-cols-2 grid-cols-1 gap-5"
         >
            <AmbassadorCard
               img="ambassadorsCard1.jpg"
               title="MAX MÜNCH"
               description="Because only those who know what wanderlust means can tell others where paradise begins."
            />
            <AmbassadorCard
               img="ambassadorsCard2.webp"
               title="KASPER HØGLUND"
               description="Getting to places that does not necessarily have to be remote and epic and staying there."
            />
            <AmbassadorCard
               img="ambassadorsCard3.webp"
               title="PHILIPP MITTERLEHNER"
               description="I like to pack my photo equipment and plan the whole trip with the places I want to see."
            />
            <AmbassadorCard
               img="ambassadorsCard4.webp"
               title="CHRIS MCCLEAN"
               description="Travelling is a transitional process that you learn to enjoy and that ultimately helps you connect with people and places.."
            />
            <AmbassadorCard
               img="ambassadorsCard5.webp"
               title="CHRISTIAN MCLEOD"
               description="There is nothing that has not inspired me or influenced my work and me as a person."
            />
            <AmbassadorCard
               img="ambassadorsCard6.webp"
               title="DAVID HERZIG"
               description="Travelling is the only thing that makes you richer!"
            />
            <AmbassadorCard
               img="ambassadorsCard7.webp"
               title="FELIX GOOSEICKE"
               description="I get a lot of inspiration from nature. Textures and details that I discover on the way in or out of the water attract my attention."
            />
            <AmbassadorCard
               img="ambassadorsCard8.webp"
               title="HALLVARD KOLLTVEIT"
               description="Stepping outside your own front door. Some of my best travel experiences have been close to home, so for me it's about just getting out there."
            />
            <AmbassadorCard
               img="ambassadorsCard9.webp"
               title="JOHANNES HÖHN"
               description="Travelling is life. It means a lot to me because it's the part of the year when I really do what I love."
            />
            <AmbassadorCard
               img="ambassadorsCard10.webp"
               title="ROMAN KÖNIGSHOFER"
               description="When I travel, I learn a lot and it opens my eyes. It shows me that people all over the world think differently, but at the same time we all have the same desires and want to live together in peace."
            />
            <AmbassadorCard
               img="ambassadorsCard11.webp"
               title="SEBASTIAN DOERK"
               description="My bucket list grows every time I drop by Instagram. I have way too many crazy friends who spend their lives floating around the globe."
            />
            <AmbassadorCard
               img="ambassadorsCard12.webp"
               title="FRANZ XAVER AICHER"
               description="Travelling has always played an important role in my life."
            />
            <AmbassadorCard
               img="ambassadorsCard13.webp"
               title="RICO GLUECK"
               description="Traveling means crossing borders, including your own."
            />
            <AmbassadorCard
               img="ambassadorsCard14.webp"
               title="SÄMI WINKLER"
               description="The further I travel, the closer I get to myself."
            />
            <AmbassadorCard
               img="ambassadorsCard15.jpg"
               title="KAMILL COSEMANS"
               description="I travel and photograph to reconnect with nature, the world and myself."
            />
         </div>
      </>
   );
};

export default AmbassadorsPage;
