import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar, Drawer, AppSEO, Footer } from '../common';
import LeftSideBar from './leftSideBar';

import backgroundImage from '@/Assets/images/background/main.jpg';

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
      <div className="md:pl-12 min-h-screen bg-zinc-200 bg-opacity-60">
        <NavBar
          drawerOpen={drawerOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default LayoutComponent;
