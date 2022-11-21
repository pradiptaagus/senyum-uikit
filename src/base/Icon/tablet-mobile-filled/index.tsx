import React from 'react';
import type { Icon } from '../type';
import TabletMobileFilledIcon from './tablet-mobile-filled.svg';

export const TabletMobileFilled = (props: Icon) => (
  <TabletMobileFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
