import React from 'react';
import type { Icon } from '../type';
import TabletMobileIcon from './tablet-mobile.svg';

export const TabletMobile = (props: Icon) => (
  <TabletMobileIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
