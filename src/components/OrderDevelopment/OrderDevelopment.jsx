import React from 'react';
import DesktopOrderDevelopment from './DesktopOrderDevelopment';
import TabletOrderDevelopment from './TabletOrderDevelopment';

const OrderDevelopment = () => {
  const isTablet = window.innerWidth <= 1280;

  return isTablet ? <TabletOrderDevelopment /> : <DesktopOrderDevelopment />;
};

export default OrderDevelopment;
