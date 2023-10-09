import TemplatePage from './TemplatePage';
import { useState } from 'react';
import {
   Input,
   Select,
   Option,
   Textarea,
   Typography,
   Checkbox,
   Button,
} from '@material-tailwind/react';

const FootherContactPage = () => {
   const [trigger, setTrigger] = useState<boolean>(false);
   const [style, setStyle] = useState<boolean>(false);
   const handleClick = () => {
      setTrigger(!trigger);
   };
   const handlerClickStyle = () => {
      setStyle(true);
   };
   const handlerCloseSelectorWindow = () => {
      if (trigger === true) setTrigger(false);
   };

   return (
      <div onClick={handlerCloseSelectorWindow}>
         <TemplatePage
            title="LET US KNOW HOW WE CAN HELP"
            description="FROM PRODUCT WARRANTY AND SERVICE TO MEDIA AND COMMUNICATIONS, OUR TEAM IS ALWAYS READY TO HELP YOU"
            img="footerContactPageImg.webp"
            buttonTitle="write to us"
            buttonStyle="bg-black text-white"
            id="dis"
         />
         <div id="dis" className="wrapper">
            <div className="wrapper bg-[#f6f6f6]">
               <Typography className="font-normal uppercase 2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl">
                  WE LOOK FORWARD TO HEARING FROM YOU.
               </Typography>
               <form method="post" className="flex flex-col gap-5 mt-[5%]">
                  <div className="flex sm:flex-row flex-col gap-5">
                     <div className="flex justify-between flex-col flex-1 gap-5">
                        <Input
                           className="text-black"
                           color="black"
                           label="NAME"
                           type="text"
                           required
                        />
                        <Input
                           required
                           className="text-black"
                           color="black"
                           label="LAST NAME"
                           type="text"
                        />
                        <Input
                           required
                           className="text-black"
                           color="black"
                           label="E-MAIL ADDRESS"
                           type="email"
                        />
                     </div>
                     <div className="flex flex-col gap-5 flex-1">
                        <Select
                           onClick={handleClick}
                           labelProps={{
                              className: trigger
                                 ? `flex w-full h-full select-none pointer-events-none absolute left-0 font-normal transition-all -top-1.5 before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 before:rounded-tl-md before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 after:rounded-tr-md after:pointer-events-none after:transition-all peer-disabled:after:border-transparent text-[11px] peer-disabled:text-transparent before:border-t-2 before:border-l-2 after:border-t-2 after:border-r-2 leading-tight text-gray-900 before:border-gray-900 after:border-gray-900`
                                 : `${
                                      !style
                                         ? `flex w-full h-full select-none pointer-events-none absolute left-0 font-normal transition-all -top-1.5 before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 before:rounded-tl-md before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 after:rounded-tr-md after:pointer-events-none after:transition-all peer-disabled:after:border-transparent text-sm peer-disabled:text-blue-gray-400 leading-[3.75] text-black before:border-transparent after:border-transparent`
                                         : `flex w-full h-full select-none pointer-events-none absolute left-0 font-normal transition-all -top-1.5 before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 before:rounded-tl-md before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 after:rounded-tr-md after:pointer-events-none after:transition-all peer-disabled:after:border-transparent text-[11px] peer-disabled:text-transparent before:border-t-2 before:border-l-2 after:border-t-2 after:border-r-2 leading-tight text-gray-900 before:border-gray-900 after:border-gray-900`
                                   }`,
                           }}
                           className={`${
                              trigger
                                 ? 'peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-2 text-sm px-3 py-2.5 rounded-[7px] border-gray-900 border-t-transparent'
                                 : !style
                                 ? 'peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200'
                                 : 'peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-2 text-sm px-3 py-2.5 rounded-[7px] border-gray-900 border-t-transparent'
                           }`}
                           label="SELECT A QUERY"
                        >
                           <Option onClick={handlerClickStyle}>
                              REASON FOR THE REQUEST
                           </Option>
                           <Option onClick={handlerClickStyle}>
                              BUSINESS ENQUIRIES
                           </Option>
                           <Option onClick={handlerClickStyle}>
                              SERVICE & PRODUCT
                           </Option>
                           <Option onClick={handlerClickStyle}>
                              MPRESS AND MEDIA
                           </Option>
                        </Select>
                        <Textarea required label="Message" color="gray" />
                     </div>
                  </div>
                  <Typography>
                     If you send us enquiries via the contact form, your details
                     from the enquiry form, including the contact details you
                     provide there, will be stored by us for the purpose of
                     processing the enquiry and in the event of follow-up
                     questions. We do not pass on your data to third parties
                     without your express consent. You can find our data
                     protection regulations here.
                  </Typography>

                  <Checkbox
                     className="h-5 w-5 rounded-none checked:bg-black border-black checked:border-black transition-all hover: hover:before:opacity-0 text-black"
                     containerProps={{ className: 'rounded-none p-0 mr-2' }}
                     labelProps={{
                        className: 'text-black font-normal',
                     }}
                     ripple={false}
                     label="I agree to the terms and conditions from the general data protection."
                     required
                  />
                  <div>
                     <Button
                        type="submit"
                        className="rounded-none text-white bg-black sm:w-auto w-full"
                     >
                        <Typography className="w-auto">SEND REQUEST</Typography>
                     </Button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default FootherContactPage;
