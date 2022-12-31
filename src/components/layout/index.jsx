import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import backgroundImage from '../../assets/images/background.jpg';
import { NavBar, Drawer, AppSEO } from '../common';
import LeftSideBar from './leftSideBar';

const LayoutComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <AppSEO />
      <div
        className="fixed h-screen w-screen"
        style={{
          zIndex: -1
        }}
      >
        <img
          className="h-full w-full object-cover"
          src={backgroundImage}
          alt="background"
        />
      </div>
      <Drawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <LeftSideBar />
      <div className="md:pl-12">
        <NavBar
          drawerOpen={drawerOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Outlet />
      </div>
    </>
  );
};

export default LayoutComponent;
