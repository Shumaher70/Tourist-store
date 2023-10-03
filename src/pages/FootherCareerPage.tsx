import { Button, Typography } from '@material-tailwind/react';
import TemplatePage from './TemplatePage';

const FootherCareerPage = () => {
   return (
      <>
         <TemplatePage
            title="CAREER"
            description="WHAT WE ARE STILL MISSING: YOUR ENERGETIC SUPPORT! WE ARE PASSIONATE ABOUT BUILDING A CULTURE WHERE DIFFERENCES ARE VALUED."
            buttonTitle="jobs"
            buttonStyle="bg-black text-white"
            extraButton
            extraButtonTitle="ABOUT US"
            extraButtonStyle="bg-white text-black border-[1px] border-black hover:bg-black hover:text-white"
            img="FootherCareerPageImg.webp"
            id="jobs"
            extraSrc="/pages/unternehmen-store"
         />
         <div id="jobs" className="px-[10%] py-[5%] w-full">
            <div className="flex justify-between">
               <Typography className="font-normal sm:text-4xl text-2xl">
                  CAREER & JOBS
               </Typography>
            </div>

            <div className="flex pt-[5%] sm:flex-row flex-col">
               <div className="xl:w-[15%] lg:w-[15%] md:w-[20%] w-[15%]">
                  <Typography>JOBS</Typography>
               </div>

               <div className="flex flex-col gap-10 w-full sm:mt-0 mt-5">
                  <div>
                     <Typography className="font-normal xl:text-2xl lg:text-1xl uppercase">
                        STUDENT ASSISTANT CUSTOMER SERVICE (M/F/D)
                     </Typography>
                     <Typography className="uppercase text-sm">
                        PART-TIME - HAMBURG
                     </Typography>
                  </div>

                  <div>
                     <Typography className="font-normal xl:text-2xl lg:text-1xl uppercase">
                        Student Assistant Finance (m/f/d)
                     </Typography>
                     <Typography className="uppercase text-sm">
                        Part-time - Hamburg
                     </Typography>
                  </div>

                  <div>
                     <Typography className="font-normal xl:text-2xl lg:text-1xl uppercase">
                        Public Relations & Social Media Manager (m/f/d)
                     </Typography>
                     <Typography className="uppercase text-sm">
                        Full-time - Hamburg
                     </Typography>
                  </div>

                  <div>
                     <Typography className="font-normal xl:text-2xl lg:text-1xl uppercase">
                        Sales Manager (m/f/d)
                     </Typography>
                     <Typography className="uppercase text-sm">
                        Sales Manager (m/f/d)
                     </Typography>

                     <div className="flex sm:flex-row flex-col bg-[#f6f6f6] rounded-lg mt-10 p-5 justify-between items-center gap-5">
                        <Typography className="font-normal xl:text-2xl lg:text-1xl uppercase">
                           NO SUITABLE JOB THERE? APPLY WITH PLEASURE INIATIV
                        </Typography>
                        <a href="mailto:jobs@heimplanet.com">
                           <Button
                              color="white"
                              className="border-[1px] border-black rounded-none"
                           >
                              unsolicited Application
                           </Button>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="flex flex-col gap-5 px-[10%] py-[5%] relative min-h-[400px] justify-center">
            <Typography className="font-normal text-white sm:text-5xl lg:w-3/5 text-2xl w-full">
               HEIMPLANET IS INSPIRED BY THE EXCITEMENT OF TRAVEL.
            </Typography>
            <Typography className=" text-white w-full">
               There is a special word that only exists in German: Heimat.
               [ˈhaimaːt]
            </Typography>
            <div className="flex gap-5">
               <Button
                  onClick={() => window.scrollTo(0, 0)}
                  color="white"
                  className="bg-white rounded-none text-black"
               >
                  Re : Store program
               </Button>
            </div>
            <img
               src={require('./img/FootherCareerPageImgBg.jpg')}
               alt="img"
               className="absolute w-full h-full object-cover top-0 left-0 -z-10 brightness-[0.8]"
            />
         </div>
      </>
   );
};

export default FootherCareerPage;
