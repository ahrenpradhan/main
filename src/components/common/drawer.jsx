import { HashLink } from 'react-router-hash-link';

import navlist from '../../constants/navlist';

const Drawer = ({ drawerOpen, handleDrawerToggle }) => (
  <div
    className={`fixed top-16 bottom-0 bg-zinc-100 bg-opacity-90 md:hidden ${
      drawerOpen ? 'left-0' : 'left-full'
    } w-full transition-all delay-300`}
  >
    <div className="flex flex-col items-center">
      {navlist.map(_ => (
        <HashLink key={_.name} smooth to={_.link} onClick={handleDrawerToggle}>
          <button className="p-4" type="button">
            {_.name}
          </button>
        </HashLink>
      ))}
    </div>
  </div>
);

export default Drawer;
