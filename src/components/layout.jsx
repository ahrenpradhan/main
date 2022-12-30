import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar, Drawer, AppSEO } from './common';

const LayoutComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <AppSEO />
      <NavBar drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <Drawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <Outlet />
    </>
  );
};

export default LayoutComponent;
