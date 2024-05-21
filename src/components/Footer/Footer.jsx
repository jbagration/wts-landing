import React from 'react';
import DesktopFooter from './DesktopFooter';
import TabletFooter from './TabletFooter';
import MobileFooter from './MobileFooter';

const Footer = () => {
  const screenWidth = window.innerWidth;
  let footerComponent;

  if (screenWidth <= 600) {
    footerComponent = <MobileFooter />;
  } else if (screenWidth <= 768) {
    footerComponent = <TabletFooter />;
  } else {
    footerComponent = <DesktopFooter />;
  }

  return footerComponent;
};

export default Footer;
