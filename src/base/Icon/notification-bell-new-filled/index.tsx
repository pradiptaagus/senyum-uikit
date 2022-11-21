import React from 'react';
import type { Icon } from '../type';
import NotificationBellNewFilledIcon from './notification-bell-new-filled.svg';

export const NotificationBellNewFilled = (props: Icon) => (
  <NotificationBellNewFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
