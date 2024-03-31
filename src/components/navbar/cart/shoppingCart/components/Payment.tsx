import React from 'react';
import { FaCcPaypal } from 'react-icons/fa';
import {
   Card,
   CardHeader,
   CardBody,
   Input,
   Button,
   Typography,
   Tabs,
   TabsHeader,
   TabsBody,
   Tab,
   TabPanel,
} from '@material-tailwind/react';
import { CreditCardIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import OrderSummery from './orderSummery/OrderSummery';

function formatCardNumber(value: string) {
   const val = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
   const matches = val.match(/\d{4,16}/g);
   const match = (matches && matches[0]) || '';
   const parts = [];

   for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
   }

   if (parts.length) {
      return parts.join(' ');
   } else {
      return value;
   }
}

function formatExpires(value: string) {
   return value
      .replace(/[^0-9]/g, '')
      .replace(/^([2-9])$/g, '0$1')
      .replace(/^(1{1})([3-9]{1})$/g, '0$1/$2')
      .replace(/^0{1,}/g, '0')
      .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2');
}

export default function Payment() {
   const [type, setType] = React.useState('card');
   const [cardNumber, setCardNumber] = React.useState('');
   const [cardExpires, setCardExpires] = React.useState('');

   return (
      <div className="w-full">
         <Card className="w-full max-w-[600px] m-auto rounded-none">
            <CardHeader
               floated={false}
               shadow={false}
               className="m-0 grid place-items-center px-4 text-center rounded-none bg-black"
            >
               {type === 'card' ? (
                  <CreditCardIcon className="w-[200px] h-[200px] text-white" />
               ) : (
                  <FaCcPaypal className="w-[200px] h-[200px] text-white" />
               )}
            </CardHeader>
            <CardBody className="p-6">
               <Tabs value={type} className="overflow-visible">
                  <TabsHeader className="relative z-0 ">
                     <Tab value="card" onClick={() => setType('card')}>
                        Pay with Card
                     </Tab>
                     <Tab value="paypal" onClick={() => setType('paypal')}>
                        Pay with PayPal
                     </Tab>
                  </TabsHeader>
                  <TabsBody
                     className="!overflow-x-hidden"
                     animate={{
                        initial: {
                           x: type === 'card' ? 400 : -400,
                        },
                        mount: {
                           x: 0,
                        },
                        unmount: {
                           x: type === 'card' ? 400 : -400,
                        },
                     }}
                  >
                     <TabPanel value="card" className="p-0">
                        <form className="mt-12 flex flex-col gap-4">
                           <div>
                              <Typography
                                 variant="small"
                                 color="blue-gray"
                                 className="mb-2 font-medium"
                              >
                                 Your Email
                              </Typography>
                              <Input
                                 color="black"
                                 type="email"
                                 placeholder="name@mail.com"
                                 className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                 labelProps={{
                                    className:
                                       'before:content-none after:content-none',
                                 }}
                              />
                           </div>

                           <div className="my-3">
                              <Typography
                                 variant="small"
                                 color="blue-gray"
                                 className="mb-2 font-medium "
                              >
                                 Card Details
                              </Typography>

                              <Input
                                 color="black"
                                 maxLength={19}
                                 value={formatCardNumber(cardNumber)}
                                 onChange={(event) =>
                                    setCardNumber(event.target.value)
                                 }
                                 icon={
                                    <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
                                 }
                                 placeholder="0000 0000 0000 0000"
                                 className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                 labelProps={{
                                    className:
                                       'before:content-none after:content-none',
                                 }}
                              />
                              <div className="my-4 flex items-center gap-4">
                                 <div>
                                    <Typography
                                       variant="small"
                                       color="blue-gray"
                                       className="mb-2 font-medium"
                                    >
                                       Expires
                                    </Typography>
                                    <Input
                                       color="black"
                                       maxLength={5}
                                       value={formatExpires(cardExpires)}
                                       onChange={(event) =>
                                          setCardExpires(event.target.value)
                                       }
                                       containerProps={{
                                          className: 'min-w-[72px]',
                                       }}
                                       placeholder="00/00"
                                       className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                       labelProps={{
                                          className:
                                             'before:content-none after:content-none',
                                       }}
                                    />
                                 </div>
                                 <div>
                                    <Typography
                                       variant="small"
                                       color="blue-gray"
                                       className="mb-2 font-medium"
                                    >
                                       CVC
                                    </Typography>
                                    <Input
                                       color="black"
                                       maxLength={4}
                                       containerProps={{
                                          className: 'min-w-[72px]',
                                       }}
                                       placeholder="000"
                                       className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                       labelProps={{
                                          className:
                                             'before:content-none after:content-none',
                                       }}
                                    />
                                 </div>
                              </div>
                              <Typography
                                 variant="small"
                                 color="blue-gray"
                                 className="mb-2 font-medium"
                              >
                                 Holder Name
                              </Typography>
                              <Input
                                 color="black"
                                 placeholder="name@mail.com"
                                 className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                 labelProps={{
                                    className:
                                       'before:content-none after:content-none',
                                 }}
                              />
                           </div>

                           <OrderSummery
                              className="!p-0"
                              removeDiscount
                              removeSubtotal
                              removeShipping
                           />

                           <Button
                              className="rounded-none bg-black"
                              color="gray"
                              size="lg"
                           >
                              Pay Now
                           </Button>
                           <Typography
                              variant="small"
                              color="gray"
                              className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                           >
                              <LockClosedIcon className="-mt-0.5 h-4 w-4" />{' '}
                              Payments are secure and encrypted
                           </Typography>
                        </form>
                     </TabPanel>
                     <TabPanel value="paypal" className="p-0">
                        <form className="mt-12 flex flex-col gap-4">
                           <div>
                              <Typography
                                 variant="paragraph"
                                 color="blue-gray"
                                 className="mb-4 font-medium"
                              >
                                 Personal Details
                              </Typography>
                              <Typography
                                 variant="small"
                                 color="blue-gray"
                                 className="mb-2 font-medium"
                              >
                                 Your Email
                              </Typography>
                              <Input
                                 color="black"
                                 type="email"
                                 placeholder="name@mail.com"
                                 className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                 labelProps={{
                                    className:
                                       'before:content-none after:content-none',
                                 }}
                              />
                           </div>

                           <div className="my-6">
                              <Typography
                                 variant="paragraph"
                                 color="blue-gray"
                                 className="mb-4 font-medium"
                              >
                                 Billing Address
                              </Typography>
                              <Typography
                                 variant="small"
                                 color="blue-gray"
                                 className="mb-2 font-medium"
                              >
                                 Country
                              </Typography>

                              <Typography
                                 variant="small"
                                 color="blue-gray"
                                 className="mt-4 -mb-2 font-medium"
                              >
                                 Postal Code
                              </Typography>
                              <Input
                                 color="black"
                                 placeholder="0000"
                                 className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                 labelProps={{
                                    className:
                                       'before:content-none after:content-none',
                                 }}
                                 containerProps={{ className: 'mt-4' }}
                              />
                           </div>
                           <OrderSummery
                              className="!p-0"
                              removeDiscount
                              removeSubtotal
                              removeShipping
                           />
                           <Button
                              className="rounded-none bg-black"
                              color="gray"
                              size="lg"
                           >
                              pay with paypal
                           </Button>
                           <Typography
                              variant="small"
                              color="gray"
                              className="flex items-center justify-center gap-2 font-medium opacity-60"
                           >
                              <LockClosedIcon className="-mt-0.5 h-4 w-4" />{' '}
                              Payments are secure and encrypted
                           </Typography>
                        </form>
                     </TabPanel>
                  </TabsBody>
               </Tabs>
            </CardBody>
         </Card>
      </div>
   );
}
