import { List, ListItem } from '@material-tailwind/react';

const FooterCookies = () => {
  return (
    <div className="bg-[#111] w-full px-[10%] py-[3%]  flex flex-wrap gap-5 justify-between items-center">
      <div className="w-[80%] sm:w-[20%]">
        <img src={require('./footer-logo.png')} alt="footer-logo" />
      </div>
      <div>
        <List className="flex flex-row flex-wrap p-0">
          <ListItem className="text-white w-auto p-1  mr-3 rounded-none">
            IMPRINT
          </ListItem>
          <ListItem className="text-white w-auto p-1 mr-3 rounded-none">
            AGB
          </ListItem>
          <ListItem className="text-white w-auto p-1 mr-3 rounded-none">
            PRIVAC POLICY
          </ListItem>
          <ListItem className="text-white w-auto p-1 mr-3 rounded-none">
            REVOCATION
          </ListItem>
          <ListItem className="text-white w-auto p-1 mr-3 rounded-none">
            COOKIES
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default FooterCookies;
