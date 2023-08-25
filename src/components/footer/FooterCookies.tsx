import { List, ListItem } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
const FooterCookies = () => {
  return (
    <div className="bg-[#111] w-full px-[10%] py-[3%]  flex flex-wrap gap-5 justify-between items-center">
      <div className="w-[80%] sm:w-[20%] cursor-pointer">
        <a href="/#carousel">
          <img src={require('./footer-logo.png')} alt="footer-logo" />
        </a>
      </div>
      <div>
        <List className="flex flex-row flex-wrap p-0">
          <NavLink to="/pages/impressum">
            <ListItem className="text-white w-auto p-1  mr-3 rounded-none">
              IMPRINT
            </ListItem>
          </NavLink>
          <NavLink to="/pages/agb">
            <ListItem className="text-white w-auto p-1  mr-3 rounded-none">
              AGB
            </ListItem>
          </NavLink>
          <NavLink to="/pages/datenschutz">
            <ListItem className="text-white w-auto p-1  mr-3 rounded-none">
              PRIVAC POLICY
            </ListItem>
          </NavLink>
          <NavLink to="/pages/widerruf">
            <ListItem className="text-white w-auto p-1  mr-3 rounded-none">
              REVOCATION
            </ListItem>
          </NavLink>
          <NavLink to="/">
            <ListItem className="text-white w-auto p-1  mr-3 rounded-none">
              COOKIES
            </ListItem>
          </NavLink>
        </List>
      </div>
    </div>
  );
};

export default FooterCookies;
