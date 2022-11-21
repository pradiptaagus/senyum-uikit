import React from 'react';
import type { Icon } from '../type';
import NotificationBellFilledIcon from './notification-bell-filled.svg';

export const NotificationBellFilled = (props: Icon) => (
  <NotificationBellFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
