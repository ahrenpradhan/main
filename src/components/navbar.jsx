import { MdMenu, MdClose } from 'react-icons/md';

const NavBar = ({ drawerOpen, handleDrawerToggle }) => (
  <>
    <div className="fixed h-16 min-w-full bg-zinc-100 opacity-20" />
    <div className=" fixed min-w-full border-b-2 border-y-zinc-50 border-opacity-20 backdrop-blur ">
      <div className=" m-auto flex h-16 justify-between md:container md:min-w-fit">
        <div className="self-center px-5">
          <span className="text-2xl">AP</span>
        </div>
        {/* mobile */}
        <div className="self-center px-5 md:hidden">
          <button onClick={handleDrawerToggle} type="button">
            {drawerOpen ? <MdClose size="28" /> : <MdMenu size="28" />}
          </button>
        </div>
        {/* desktop */}
        <div className="hidden gap-4 self-center px-5 md:flex">
          <button type="button">Work</button>
          <button type="button">Present</button>
        </div>
      </div>
    </div>
  </>
);
NavBar.defaultProps = {
  drawerOpen: false
};

export default NavBar;
