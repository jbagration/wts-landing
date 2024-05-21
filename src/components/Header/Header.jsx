import React from 'react';
import DesktopHeader from './DesktopHeader';
import TabletHeader from './TabletHeader';
import MobileHeader from './MobileHeader';

const Header = () => {
  const screenWidth = window.innerWidth;
  let headerComponent;

  if (screenWidth <= 700) {
    headerComponent = <MobileHeader />;
  } else if (screenWidth <= 1024) {
    headerComponent = <TabletHeader />;
  } else {
    headerComponent = <DesktopHeader />;
  }

  return headerComponent;
};

export default Header;

