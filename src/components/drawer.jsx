const Drawer = ({ drawerOpen, handleDrawerToggle }) => (
  <div
    className={`fixed top-16 bottom-0 bg-zinc-100 bg-opacity-90 md:hidden ${
      drawerOpen ? 'left-0' : 'left-full'
    } w-full transition-all delay-300`}
  >
    This is the drawer
  </div>
);

export default Drawer;
