import { Button, List, ListItem, Typography } from '@material-tailwind/react';

const FooterInfo = () => {
  return (
    <div className="bg-[#111] w-full px-[10%] py-[5%] border-b-[1px] border-gray-600 flex flex-wrap gap-5 justify-between">
      <div className="w-full xl:w-[49%] flex flex-wrap gap-5 justify-center sm:justify-between">
        <div className="flex-col">
          <Typography variant="h4" color="white">
            HELP & CONTACT
          </Typography>
          <List className="px-0">
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              FAQs
            </ListItem>
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              Contact
            </ListItem>
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              Shipping
            </ListItem>
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              Tent sizes
            </ListItem>
          </List>
        </div>

        <div className="flex-col">
          <Typography variant="h4" color="white">
            PRODUCTS
          </Typography>
          <List className="px-0">
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              Tents & Accessories
            </ListItem>
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              Tarps
            </ListItem>
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              Backpacks & Bags
            </ListItem>
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              Apparel
            </ListItem>
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              Gear
            </ListItem>
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              HPT Selected
            </ListItem>
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              Re:Store
            </ListItem>
          </List>
        </div>

        <div className="flex-col">
          <Typography variant="h4" color="white">
            COMPANY
          </Typography>
          <List className="px-0">
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              About Us
            </ListItem>
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              Career & Jobs
            </ListItem>
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              Press contact
            </ListItem>
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              Store
            </ListItem>
            <ListItem className="text-white px-0 py-0 mt-2 rounded-none">
              Affiliateprogram
            </ListItem>
          </List>
        </div>
      </div>

      <div className="px-5 py-5 sm:px-[5%] sm:py-[2%] w-full lg:w-[49%] h-2/4 bg-[#ffffff1a] flex-col">
        <Typography variant="h2" color="white" className="sm:text-3xl text-2xl">
          BECOME PART OF THE COMMUNITY
        </Typography>

        <div className="flex items-center cursor-pointer m-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2" />
            <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" />
          </svg>
          <Typography
            variant="h5"
            color="white"
            className="ml-2 text-xl w-full lg:w-2/4"
          >
            10% COUPON FOR NEWSLETTER REGISTRATION
          </Typography>
        </div>
        <Button color="white" size="lg" className="rounded-none mt-5">
          REGISTER NOW
        </Button>
      </div>
    </div>
  );
};

export default FooterInfo;