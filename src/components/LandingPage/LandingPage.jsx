import React from 'react';
import DesktopLandingPage from './DesktopLandingPage';
import TabletLandingPage from './TabletLandingPage';

const LandingPage = () => {
  const isTablet = window.innerWidth <= 1024;

  return isTablet ? <TabletLandingPage /> : <DesktopLandingPage />;
};

export default LandingPage;
