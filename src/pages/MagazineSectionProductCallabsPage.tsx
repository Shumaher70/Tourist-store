import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TemplateMagazineCard from './TemplateMagazineCard';
import TemplateMagazineCarousel from './TemplateMagazineCarousel';
import { Typography } from '@material-tailwind/react';

const MagazineSectionProductCallabsPage = () => {
  const sizeSlice = useSelector((state: RootState) => state.size.heightNav);
  return (
    <>
      <div
        style={{ marginTop: `${sizeSlice}px` }}
        className="flex flex-col gap-5 px-[10%] py-[3%] bg-gray-100"
      >
        <Typography className="sm:w-2/4 w-full sm:text-7xl text-4xl font-bold">
          COLLABS
        </Typography>

        <TemplateMagazineCard
          title="HPT X WORLD EXPLORERS COLLECTIVE SHIRT"
          description="We're thrilled to bring you the latest updates and exciting news from our friends at the World Explorers Collective."
          img="MagazineSectionProductCallabsPageImg1.webp"
          buttonDescription="READ MORE"
        />

        <TemplateMagazineCard
          title="OUR TIPS FOR TRAVELING LIGHT"
          description="Space-saving and lightweight packing is a fundamental skill for any globetrotter."
          img="MagazineSectionAdventurePageImg2.jpg"
          buttonDescription="READ MORE"
        />

        <TemplateMagazineCard
          title="CAMPING IN GERMANY"
          description="More openings are in sight and it's time to plan the first trips outdoors. If you want to spend a night at a campsite in beautiful surroundings in Germany without being woken up by slamming car doors or motorhome generators, only to find that the first thing you see is a wall of caravans, it's not so easy."
          img="MagazineSectionAdventurePageImg3.webp"
          buttonDescription="READ MORE"
        />

        <TemplateMagazineCard
          title="ROADTRIP - THE MOTORCYCLE BAGS"
          description="The next step: we set about developing the bags motorcycle bags."
          img="MagazineSectionAdventurePageImg4.jpg"
          buttonDescription="READ MORE"
        />

        <TemplateMagazineCard
          title="ROADTRIP - THE MOTORCYCLES
          "
          description="It's time to reveal the secret: as we already announced in the first post(HEIMPLANET Roadtrip - The Preparation) about our road trip, we are on the road with motorbikes."
          img="MagazineSectionAdventurePageImg5.jpg"
          buttonDescription="READ MORE"
        />

        <TemplateMagazineCard
          title="ROAD TRIP - THE PREPARATION"
          description="Every journey requires good preparation, especially if a road trip is planned - what do you take with you, what stays at home & what do you really need on the road?"
          img="MagazineSectionAdventurePageImg6.jpg"
          buttonDescription="READ MORE"
        />

        <TemplateMagazineCard
          title="MAVERICKS ICE HOCKEY TOUR"
          description="Before the start of spring we took advantage of the cold days & the snow to start the HEIMPLANET MAVERICKS Ice Hockey Tour ..."
          img="MagazineSectionAdventurePageImg7.webp"
          buttonDescription="READ MORE"
        />

        <TemplateMagazineCard
          title="ON PILGRIMAGE IN EASTERN TIBET"
          description="The still unclimbed Khawa Karpo 'is one of the eight holy' mountains of Tibet."
          img="MagazineSectionAdventurePageImg8.webp"
          buttonDescription="READ MORE"
        />

        <TemplateMagazineCard
          title="THE CAVE GOES WEST"
          description="ndividual travel and being on the road simply never gets boring. Especially when travelling the fascinating and breathtaking West of the United States of America, which is literally bursting with epic natural monuments."
          img="MagazineSectionAdventurePageImg9.webp"
          buttonDescription="READ MORE"
        />

        <TemplateMagazineCard
          title="2 TENTS, 3 DAYS, 4 BIKES AND A LOT OF CONCRETE"
          description="As summer drew to a close and temperatures began to drop, the forecast for this weekend looked surprisingly good, even for northern Europe."
          img="MagazineSectionAdventurePageImg10.webp"
          buttonDescription="READ MORE"
        />
      </div>

      <TemplateMagazineCarousel />
    </>
  );
};

export default MagazineSectionProductCallabsPage;
