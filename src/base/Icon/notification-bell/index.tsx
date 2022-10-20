import React from 'react';
import type { Icon } from '../type';
import NotificationBellIcon from './notification-bell.svg';

export const NotificationBell = (props: Icon) => (
  <NotificationBellIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
