import React from 'react';
import type { Icon } from '../type';
import NotificationBellPlusFilledIcon from './notification-bell-plus-filled.svg';

export const NotificationBellPlusFilled = (props: Icon) => (
  <NotificationBellPlusFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
