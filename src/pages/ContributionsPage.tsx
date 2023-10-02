import TemplateMagazineCarousel from './TemplateMagazineCarousel';
import TemplatePage from './TemplatePage';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';
import ContributionsCard from './ContributionsCard';

const ContributionsPage = () => {
   return (
      <>
         <TemplatePage
            title="MAHARISHI X HEIMPLANET"
            description="London-based streetwear label Maharishi and HEIMPLANET celebrate nature with a DPM: Golden Tigerstripe Camouflage."
            img="ContributionsPageImg.jpg"
            buttonTitle="To the article"
            buttonStyle="bg-black text-white"
            src="/blogs/collabs/maharishi-x-heimplanet-the-cave"
         />
         <TemplateMagazineCarousel />

         <div className="px-[10%] py-[5%]">
            <ContribuionsCardWrapper
               buttonTitle="DISCOVER"
               buttonStyle="border-[1px] border-black rounded-none bg-white text-black"
               hideButton
               title="CURRENT CONTRIBUTIONS"
               path="/pages/blog"
            >
               <ContributionsCard
                  title="MY WAY TO THE PACIFIC NORTHWEST"
                  description="I think it is the mystery and diversity of this place that has always drawn me there. As someone who loves spending time in nature and is an adventurous soul, this place has caught my attention since I first heard about it."
                  img="contributionsPageCardImg1.webp"
               />
               <ContributionsCard
                  title="HEIMPLANET IN THE ANTARCTIC"
                  description="HEIMPLANET recently collaborated with New Zealand scientists to support their research on climate change in Antarctica. But how do you protect sensitive scientific instruments in the harshest environment on earth? With the strongest tent in the world - the MAVERICKS!"
                  img="contributionsPageCardImg2.webp"
               />
               <ContributionsCard
                  title="BINSURFING IRELAND TRIP"
                  description="Loading seven surfboards onto an old Toyota Landcruiser and driving around Ireland for a few weeks to find waves. That sounds like an enjoyable trip!"
                  img="contributionsPageCardImg3.jpg"
               />
               <ContributionsCard
                  title="SYNCRONICLES III"
                  description="Welcome to the stage aka social media: the perfect life! Insta-feeds are synonymous with the life of the dream - everyone is always on holiday, always on the go, always on the move."
                  img="contributionsPageCardImg4.webp"
               />
               <ContributionsCard
                  title="ICELANDIC SUMMER"
                  description="Iceland is a place that is as beautiful & otherworldly as it is bleak and bitter."
                  img="contributionsPageCardImg5.webp"
               />
               <ContributionsCard
                  title="8 MONTHS ON THE RUN"
                  description="The last eight months have been quite a ride. In October 2016, we left Austria and made our way to Nepal. We didn't know how long we would stay. We only knew that we were in no hurry."
                  img="contributionsPageCardImg6.jpg"
               />
            </ContribuionsCardWrapper>
         </div>
      </>
   );
};

export default ContributionsPage;
