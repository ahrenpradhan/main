import { MdMenu, MdClose } from 'react-icons/md';
import { HashLink } from 'react-router-hash-link';
import content from '@/Assets/ishu/content.json';
import navlist from '../../constants/navlist';
import logo from '@/Assets/ishu/logo.png';

const NavBar = ({ drawerOpen, handleDrawerToggle }) => (
  <>
    <div className="fixed right-0 left-0 h-16 border-b-2 border-y-zinc-50 bg-zinc-100 opacity-40 " style={{ zIndex: 9998 }} />
    <div className="fixed right-0 left-0 border-opacity-20 backdrop-blur" style={{ zIndex: 9999 }}>
      <div className=" m-auto flex h-16 justify-between md:container md:min-w-fit">
        <div className="self-center px-5">
          <HashLink smooth to="/#">
            <div className='flex items-center gap-3'>
              <img src={logo} alt="Logo" className="h-16 w-auto" style={{ scale: 1.5 }} />
              <span className="hidden text-lg font-bold tracking-tight text-slate-900 sm:inline">
                {content.navbar.company_name}
              </span>
            </div>
          </HashLink>
        </div>
        {/* mobile */}
        <div className="self-center px-5 md:hidden">
          <button onClick={handleDrawerToggle} type="button">
            {drawerOpen ? <MdClose size="28" /> : <MdMenu size="28" />}
          </button>
        </div>
        {/* desktop */}
        <div className="hidden gap-4 self-center px-5 md:flex">
          {navlist.map(_ => (
            <HashLink key={_.name} smooth to={_.link}>
              <button className="p-4" type="button">
                {_.name}
              </button>
            </HashLink>
          ))}
        </div>
      </div>
    </div>
  </>
);
NavBar.defaultProps = {
  drawerOpen: false
};

export default NavBar;
